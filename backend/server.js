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
const SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Debug: check if environment variables load
console.log(
  "BREVO_API_KEY:",
  process.env.BREVO_API_KEY ? "Loaded" : "NOT LOADED"
);
console.log("USER_EMAIL:", process.env.USER_EMAIL);

// Debug endpoint for frontend testing
app.get("/debug", (req, res) => {
  res.json({
    apiKeyLoaded: !!process.env.BREVO_API_KEY,
    apiKeyLength: process.env.BREVO_API_KEY?.length || 0,
    userEmail: process.env.USER_EMAIL,
  });
});

// Brevo configuration
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject } = req.body;

  if (!name || !email || !subject) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    await apiInstance.sendTransacEmail({
      sender: {
        name: "Portfolio Website",
        email: "josephkhella2030@gmail.com", // your Brevo verified sender
      },
      to: [{ email: process.env.USER_EMAIL }],
      replyTo: { email },
      subject: "New Form Submission",
      textContent: `Name: ${name}\nEmail: ${email}\nMessage: ${subject}`,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    const brevoError = error.response?.text || error.message;
    console.error("Email - error:", brevoError);

    res.status(500).json({
      error: "Email failed to send",
      details: brevoError,
    });
  }
});

// Start server
app.listen(process.env.PORT || 3500, () => {
  console.log("Server running...");
});
