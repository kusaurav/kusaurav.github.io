import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).send("Missing fields");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      },
    });
    console.log("PASS (raw):", JSON.stringify(process.env.GMAIL_APP_PASSWORD));

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `You have received a new message via your portfolio:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: `Thank You for Reaching Out - Saurav Kumar`,
        text: `Hi ${name},\n\nThank you for contacting me through my portfolio. I have received your message and will get back to you shortly.\n\nBest regards,\nSaurav Kumar`,
      });

    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
