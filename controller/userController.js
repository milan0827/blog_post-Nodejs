const User = require("./../model/userModel");

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: success,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};
