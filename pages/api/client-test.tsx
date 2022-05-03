import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "hi22",
      name: "hi22"
    },
  });
  res.json({
    ok: true,
    data: "xx",
  });
}