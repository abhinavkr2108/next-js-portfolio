import { transporter, mailOptions } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.json();
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n\nMessage: ${data.message}`,
      html: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n\n Message: ${data.message}`,
    });
    return NextResponse.json({ data: data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error });
  }
}
