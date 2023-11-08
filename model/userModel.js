const mongoose = require("mongoose");

const useSchema = mongoose.Schema({
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
  },

  active: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", useSchema);

module.exports = User;
