const express = require("express");
const dotenv = require("dotenv");

const blogRouter = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");

// dotenv for loading environment variable
dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());

// Testing purpose
// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "success",
//   });
// });

// API endpoints
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
