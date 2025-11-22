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
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Test route
app.get("/test", (req, res) => {
  res.send("Backend is working");
});

// Send email route
app.post("/api/send-email", async (req, res) => {
  const { name, email, subject } = req.body;

  if (!name || !email || !subject) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.USER_EMAIL,
      subject: "New Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${subject}
      `,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Email failed to send" });
  }
});

app.listen(process.env.PORT || 3600, () => {
  console.log(`Server running on port ${process.env.PORT || 3600}`);
});
