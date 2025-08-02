import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newFeedback = await prisma.feedback.create({
      data: {
        person: body.person,
        stars: body.stars,
        message: body.message,
      },
    });

    return NextResponse.json(newFeedback, { status: 200 });

  } catch (error) {
    console.error("Error in POST in feedback:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request in feedbacl." },
      { status: 500 }
    );
  }
}
export async function GET(){
    try {
        const allFeedbacks = await prisma.feedback.findMany();
        console.log("all feedbacks",allFeedbacks);
        return NextResponse.json(allFeedbacks);
    } catch (error) {
        console.error("Error in POST in feedback:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your feedbacks." },
      { status: 500 }
    );
    }
}