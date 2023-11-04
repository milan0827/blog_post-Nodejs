const mongoose = require("mongoose");
const Blog = require("./model/blogModel");
const app = require("./app");

const database = process.env.DATABASE.replace(
  "<password>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(database)
  .then(() => console.log("Database connected successully..."));

// Testing if the connection to the database is working properly or not
// const newBlog = new Blog({
//   title: "My Blog is here",
//   blogTypes: "Gaming",
//   description: "This is my First Blog",
// });

// newBlog
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log(err));

const port = process.env.port || 9000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
