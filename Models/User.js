import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    minlength: [3, "name must be 3 at minimum"],
    maxlength: [20, "name must be 20 at maximum"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: [100, "password should be at maximum of 100"],//8yrt el length m3 est5dam el bcrypt el pass bykoon kber
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;