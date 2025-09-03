import nodemailer from "nodemailer";

const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;

export default async function handler(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Email to yourself
    await transporter.sendMail({
      from: GMAIL_USER,
      to: GMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      text: `You have received a new message via your portfolio:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // Acknowledgment email to sender
    await transporter.sendMail({
      from: GMAIL_USER,
      to: email,
      subject: `Thank You for Reaching Out - Saurav Kumar`,
      text: `Hi ${name},\n\nThank you for contacting me through my portfolio. I have received your message and will get back to you shortly.\n\nBest regards,\nSaurav Kumar`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
