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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
  }

  const user = await User.findOne({ email });

  console.log(password);
  console.log(user.password);

  if (!user) {
    return res.status(401).json({
      status: "fail",
      message: "Incorrect email or password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, {
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

  user.password = undefined;

  res.status(201).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
