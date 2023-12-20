import { NextRequest, NextResponse } from "next/server";
import conn from "@/config/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json(); 
    const id = body.id;

    // console.log(`Received id: ${id}`);

    try {
        const result = await conn.query(`SELECT * FROM material WHERE id = ${id}`);
        return NextResponse.json(result.rows);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
