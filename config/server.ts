export default ({ env }) => ({
  host: '0.0.0.0',  // <-- This line ensures the server binds to 0.0.0.0
  port: env.int('PORT', parseInt(process.env.PORT) || 10000), // Use the environment PORT or a fallback
  app: {
    keys: env.array('APP_KEYS'),
  },
});