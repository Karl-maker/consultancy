// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Email } from "@/entities/email";
import { sendEmail } from "@/lib/send.email";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  await sendEmail(req.body as Email<any>);
  res.status(200).write('Email Sent');
}
