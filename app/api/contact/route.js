import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, email, subject, message } = await request.json();

    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}