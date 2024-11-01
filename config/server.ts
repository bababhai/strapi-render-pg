export default ({ env }) => ({
  host: '0.0.0.0', // Ensures the server binds to 0.0.0.0
  port: parseInt(process.env.PORT), // Use the environment PORT provided by Render
  app: {
    keys: env.array('APP_KEYS'),
  },
});
