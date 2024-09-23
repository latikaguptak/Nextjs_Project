import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
<<<<<<< HEAD
    firstname: {
      type: String,
      required: true,
      // unique: true,
      minlength: 3,
      maxlength: 20,
    },
    lastname: {
      type: String,
      required: true,
      // unique: true,
=======
    name: {
      type: String,
      required: true,
      unique: true,
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
<<<<<<< HEAD
      // unique: true,
      // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
=======
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  { timestamps: true }
);

// Check if model is already registered to avoid re-registration errors
<<<<<<< HEAD
export default mongoose.models.User || mongoose.model("User", userSchema);
=======
export default mongoose.models.User || mongoose.model("User", userSchema);
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
