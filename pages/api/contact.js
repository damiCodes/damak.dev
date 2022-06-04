require("dotenv").config();
import { createTransport } from "nodemailer";
import { google } from "googleapis";

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  const data = { name, email, message };
  const OAuth2 = google.auth.OAuth2;

  const OAuth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  OAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    OAuth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  const transporter = createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  try {
    const result = await transporter.sendMail({
      from: process.env.EMAIL,
      to: "damak.dev@gmail.com",
      subject: `Message From ${data.name}`,
      text: `${data.message} \n\nEmail Address: ${data.email}`,
    });
    console.log(result);
    res.status(200).json({ message: "Success ✔", type: "success" });
  } catch (error) {
    res.status(400).json({
      message: "An error occurred, please try again. ✖",
      type: "error",
    });
    console.log(error);
  }
}
