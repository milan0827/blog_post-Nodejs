const Blog = require("./../model/blogModel");

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();

    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
};
