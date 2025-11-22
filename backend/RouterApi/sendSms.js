const express = require("express");
const router = express.Router();
const SibApiV3Sdk = require("sib-api-v3-sdk");

// Brevo configuration
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

router.post("/", async (req, res) => {
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
module.exports = router;
