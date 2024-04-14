import { connectMongoDb } from "@/lib/db";
import UserModel, { User } from "@/models/user";

export const createUser = async (user: Omit<User, "createdAt" | "updatedAt">): Promise<boolean> => {
  try {
    await connectMongoDb();
    await UserModel.create(user);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    await connectMongoDb();
    const user = await UserModel.findOne({ email });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
