exports.getBlog = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "get a blog",
  });
};

exports.getAllBlogs = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "get all the blogs",
  });
};

exports.createBlog = (req, res) => {
  res.status(201).json({
    status: "success",
    message: "Blogs created",
  });
};

exports.updateBlog = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Blog updated",
  });
};

exports.deleteBlog = (req, res) => {
  res.status(204).json({
    status: "success",
    message: "Blog deleted",
  });
};
