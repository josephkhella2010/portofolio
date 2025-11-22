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
require("dotenv").config();

const SibApiV3Sdk = require("sib-api-v3-sdk");

const app = express();
app.use(cors());
app.use(express.json());

// Configure Brevo
let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

// Test
app.get("/test", (req, res) => {
  res.send("Backend is working");
});

// Send email
app.post("/api/send-email", async (req, res) => {
  const { name, email, subject } = req.body;

  if (!name || !email || !subject) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    await apiInstance.sendTransacEmail({
      sender: { email: email, name: "Website Form" },
      to: [{ email: process.env.USER_EMAIL }],
      replyTo: { email: email },
      subject: "New Form Submission",
      textContent: `Name: ${name}\nEmail: ${email}\nMessage: ${subject}`,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Email failed", details: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
