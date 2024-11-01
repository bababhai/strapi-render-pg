export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 10000), // Use the environment PORT or default to 10000
  app: {
    keys: env.array('APP_KEYS'),
  },
});
