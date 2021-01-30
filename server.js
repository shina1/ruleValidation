const app = require('./app');

const port = 3200;
const server = app.listen(port, () => {
    console.log(`app running on port ${port}`);
  });

  