export default ({ env }) => {
  const port = parseInt(process.env.PORT); 
  console.log(`Binding server to port: ${port}`); // Add this line to log the port value

  return {
    host: '0.0.0.0',
    port: port,
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};
