import { prisma } from "@/lib/prisma";
import { Trykker } from "next/font/google";
import { NextResponse } from "next/server";


export async function POST(req:Request) {
  try {
    const body = await req.json();
    const newDonar = await prisma.donar.create({
        data:{
            name: body.name,
            email: body.email,
            registerNo: body.registerNo,
            phone: body.phone,
            bloodGroup: body.bloodGroup,
            department: body.department,
            avaliable: body.avaliable,
        }
    });
    console.log("New Donar Created:", newDonar);
    return NextResponse.json(newDonar, { status: 200});

  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
        { error: "An error occurred while processing your request." },
        { status: 500 }
        );
  }
}

export async function GET() {
    try {
        const alldoanrs = await prisma.donar.findMany();
        console.log("All Donars Fetched:", alldoanrs);
        return NextResponse.json(alldoanrs, { status: 200 });
    } catch (error) {
        console.log("error in alldonars ");
        return NextResponse.json(
            { error: "An error in alldoanrs" },
            { status: 500 }
            );
    }
}