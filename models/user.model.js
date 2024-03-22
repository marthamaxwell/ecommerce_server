import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },

    username: {
      type: String,
      required: [true, "Please enter your username"],
      unique: true,
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
      unique: true,
    },

    sex: {
      type: String,
      required: [true, "Please enter your gendet"],
    },

    bio: {
      type: String,
      default: "",
    },

    Phone_number: {
      type: String,
      default: "",
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
