import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, username, password } = body;

    if (!name || !username || !password) {
      return NextResponse.json({ error: "Fill all inputs" }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({
      where: { username },
    });

    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "Signup failed" }, { status: 500 });
  }
}
