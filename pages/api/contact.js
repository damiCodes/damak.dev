require("dotenv").config();
const { createTransport } = require("nodemailer");
const { google } = require("googleapis");

const OAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

OAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  try {
    const accessToken = await OAuth2Client.getAccessToken();
    const transporter = createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        // clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Message From ${name}`,
      text: `${message} \n\nEmail Address: ${email}`,
    });
    res.status(200).json({ message: "Message sent ✔", status: "success" });
  } catch (error) {
    res.status(400).json({
      message: "An error occurred, please try again.",
      status: "failed",
    });
  }
}
