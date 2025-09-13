import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function POST(request:Request) {
    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");


        const body = await request.json();
        const { username , password} = body;
        if(!username || !password){
           return NextResponse.json({error:"all fields are required"},{status:400})

        }
        const user = await prisma.user.findUnique({where:{username}});
        if(!user){return NextResponse.json({error:"invalid credientials"},{status:401})}
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword){return NextResponse.json({error:"invalid password"},{status:401})}
        const token = jwt.sign(
            {id:user.id,username:user.username},
            JWT_SECRET!,
            {expiresIn:"1h"}
           
        )
        return NextResponse.json({message:"login succes",token},{status:200})
    } catch (error) {
        NextResponse.json({error:"signin failed"},{status:500})
    }
}