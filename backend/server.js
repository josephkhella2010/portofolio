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

// IMPORTANT: Gmail SMTP must be used on Render, NOT `service: "gmail"`
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL, // your gmail
    pass: process.env.USER_PASSWORD, // your 16-letter app password
  },
});

// SEND EMAIL ROUTE
app.post("/api/send-email", async (req, res) => {
  const { name, email, subject } = req.body;

  if (!name || !email || !subject) {
    return res.status(401).json({ sms: "please fill all fields" });
  }

  try {
    await transporter.sendMail({
      from: process.env.USER_EMAIL, // Gmail requires your own email here
      replyTo: email, // reply goes to user
      to: process.env.USER_EMAIL, // email sent to you
      subject: "New Form Submission",
      text: `
        First Name: ${name}
        Email: ${email}
        Subject: ${subject}
      `,
    });

    return res.status(200).json({ sms: "successfully sent" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: error.message });
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
