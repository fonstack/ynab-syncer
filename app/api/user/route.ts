import { auth } from "@/auth";
import { connectMongoDb } from "@/lib/db";
import UserModel, { User } from "@/models/user";
import { NextResponse } from "next/server";

type BodyType = Omit<User, "createdAt" | "updatedAt">;

export const POST = auth(async (req): Promise<Response> => {
  if (!req.auth) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const body: BodyType = await req.json();
  await connectMongoDb();
  await UserModel.create(body);

  return NextResponse.json({ message: "User created successfully" }, { status: 201 });
});
