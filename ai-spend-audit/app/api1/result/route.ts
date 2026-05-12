import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  const audit = await prisma.audit.findUnique({
    where: {
      id: id || "",
    },
  });

  return NextResponse.json(audit);
}