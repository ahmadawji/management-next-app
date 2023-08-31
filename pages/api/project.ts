import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jwt = req.cookies[process.env.COOKIE_NAME as string];

  const user = await validateJWT(jwt as string);
  await db.project.create({
    data: { name: req.body.name, ownerId: user!.id },
  });
  res.json({ data: { message: "ok" } });
}
