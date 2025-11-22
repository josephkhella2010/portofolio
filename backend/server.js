/* const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");

require("dotenv").config();
app.use(cors());
app.use(express.json());

//#######################################################
app.get("/test", (req, res) => {
  res.send("Backend is working");
});
//######################################################################
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});
app.post("/api/send-email", async (req, res) => {
  const { name, email, subject } = req.body;
  try {
    const newSms = {
      name,
      email,
      subject,
    };
    if (!name || !email || !subject) {
      return res.status(401).json({ sms: "please fill all fields" });
    }

    await transporter.sendMail({
      from: email,
      to: process.env.USER_EMAIL,
      subject: "New Form Submission",
      text: `
        First Name: ${name}
        Email ${email}
        Subject: ${subject}
      `,
    });
    return res.status(200).json({ sms: "successfully sent", message: newSms });
  } catch (error) {
    return res.status(404).json({ error });
  }
});
app.get("/check-routes", (req, res) => {
  res.json({ message: "Routes loaded" });
});

//#######################################################
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || 3600}`
  );
});
 */
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// CORS — allow frontend (replace * with your website domain if needed)
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.send("Backend is working");
});

// Brevo SMTP Transporter
const transporter = nodemailer.createTransport({
  host: process.env.BREVO_HOST, // smtp-relay.brevo.com
  port: Number(process.env.BREVO_PORT) || 587,
  secure: false, // MUST be false for port 587
  auth: {
    user: process.env.BREVO_USER, // 9c44fa001@smtp-brevo.com
    pass: process.env.BREVO_PASSWORD, // your Brevo SMTP key
  },
});

// Send email route
app.post("/api/send-email", async (req, res) => {
  const { name, email, subject } = req.body;

  if (!name || !email || !subject) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Website Form" <${process.env.BREVO_USER}>`,
      to: process.env.USER_EMAIL, // where you receive emails
      replyTo: email,
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${subject}`,
    });

    return res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Email failed to send" });
  }
});

// Start server (Render sets PORT automatically)
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
