const User = require("./../model/userModel");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Creating token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });

    const expiresIn = new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRATION * 1000 * 60 * 60 * 24
    );

    res.cookie("jwt", token, {
      expires: expiresIn,
      secure: true,
      httpOnly: true,
    });

    newUser.password = undefined;

    res.status(201).json({
      status: "success",
      token,
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.json({
      status: "fail",
      err,
    });
  }
};
