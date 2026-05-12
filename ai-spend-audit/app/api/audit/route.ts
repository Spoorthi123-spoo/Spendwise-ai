import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { calculateAudit } from "@/lib/audit";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const audit = calculateAudit(
      body.tool,
      body.plan,
      body.seats
    );

    const saved = await prisma.audit.create({
      data: {
        tools: body,
        savings: audit.savings,
        summary: audit.recommendation,
      },
    });

    return NextResponse.json(saved);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}