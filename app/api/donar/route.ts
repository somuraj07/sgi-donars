import { prisma } from "@/lib/prisma";
import { Trykker } from "next/font/google";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
  try {
    const body = await req.json();

    // body should be an array of donors
    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Request body must be an array of donors" },
        { status: 400 }
      );
    }

    const result = await prisma.donar.createMany({
      data: body.map((donor: any) => ({
        name: donor.name,
        email: donor.email,
        registerNo: donor.registerNo,
        phone: donor.phone,
        bloodGroup: donor.bloodGroup,
        department: donor.department,
        avaliable: donor.avaliable,
      })),
      skipDuplicates: true, // avoids error if same email/registerNo already exists
    });

    console.log("Bulk donors created:", result);

    return NextResponse.json(
      { message: "Donors created successfully", count: result.count },
      { status: 200 }
    );
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