const app = require("./app");

const port = process.env.port || 9000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
