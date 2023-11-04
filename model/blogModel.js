const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required for the blog post"],
    trim: true,
    maxLength: [
      100,
      "Blog title must have less than or equal to 100 character",
    ],
    minLength: [8, "Blog title must have atleast 10 characters"],
  },

  blogCreatedAt: {
    type: Date,
    default: Date.now(),
  },

  blogTypes: {
    type: String,
    required: [true, "Blog type is required"],
    enum: {
      values: [
        "Business",
        "Lifestyle",
        "Personal",
        "News",
        "Sports",
        "Music",
        "Gaming",
        "Art",
        "Food",
        "Travel",
        "Fashion",
      ],
      message: "Blog must be one of the given",
    },
  },

  description: {
    type: String,
    trim: true,
    required: [true, "Description is required for the blogs"],
  },

  image: [String],
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
