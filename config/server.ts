export default ({ env }) => ({
  host: '0.0.0.0', // Ensure the host is set to 0.0.0.0
  port: parseInt(process.env.PORT) || 10000, // Prioritize Render's PORT, fallback to 10000
  app: {
    keys: env.array('APP_KEYS'),
  },
});