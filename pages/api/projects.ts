import { getUserfromJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const user = await getUserfromJWT(req.cookies.__project_app__ as string);
      const projects = await db.project.findMany({
        where: { ownerId: user?.id },
        include: { tasks: true },
      });
      res.status(200);
      res.json({ projects });
    } catch (e) {
      res.status(500);
      res.json({
        error: `"failed to load data!"`,
      });
    }
  } else {
    res.status(400);
    res.json({ error: "Bad request error!" });
  }
}
