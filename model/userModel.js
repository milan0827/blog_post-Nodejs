const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    unique: false,
    required: [true, "A user must have a name"],
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },

  password: {
    type: String,
    minlength: [8, "Password must be above 8 characters."],
    required: [true, "Please provide a password"],
  },

  role: {
    type: String,
    enum: ["normalUser", "admin"],
    default: "normalUser",
    select: false,
  },

  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.methods.correctPassword = async function (
  userInputPassword,
  userDbPassword
) {
  return await bcrypt.compare(userInputPassword, userDbPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
