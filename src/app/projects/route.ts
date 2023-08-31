import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  if (req.method === "GET") {
    try {
      const user = await getUserFromCookie(cookieStore);
      const projects = await db.project.findMany({
        where: { ownerId: user?.id },
        include: { tasks: true },
      });
      return NextResponse.json(
        { projects },
        {
          status: 200,
        }
      );
    } catch (e) {
      return NextResponse.json(
        { error: `"failed to load data!"` },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Bad request error!" }, { status: 400 });
  }
}
