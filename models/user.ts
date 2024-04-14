import mongoose, { InferSchemaType, Schema, models, Model } from "mongoose";

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true, _id: false }
);

export type User = InferSchemaType<typeof userSchema>;

const UserModel = (models?.User as Model<User>) || mongoose.model<User>("User", userSchema);
export default UserModel;
