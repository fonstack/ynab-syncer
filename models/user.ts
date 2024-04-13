import mongoose, { InferSchemaType, Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export type User = InferSchemaType<typeof userSchema>;

const UserModel = (models ?? []).User || mongoose.model("User", userSchema);
export default UserModel;
