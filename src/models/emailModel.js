import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    sender: String,
    receiver: String,
    subject: String,
    text:String,
    isActive: {
        type: Boolean,
        default: true,
      },
  },
  { timestamps: true }
);

const Email = mongoose.model("Email",emailSchema);
export default Email;