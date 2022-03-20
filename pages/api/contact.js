require("dotenv").config();
import { createTransport } from "nodemailer";
// import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(422).json({ message: "Invalid Method" });
    return;
  }
  const { name, email, message } = req.body;
  if (!name || name.trim() === "") {
    res.status(422).json({ message: "Name cannot be blank" });
    return;
  }
  if (!email || !email.includes("@")) {
    res.status(422).json({ message: "Invalid email Address" });
    return;
  }
  if (!message || message.trim() === "") {
    res.status(422).json({ message: "Message cannot be blank" });
    return;
  }

  const data = { name, email, message };

  // const OAuth2 = google.auth.OAuth2;

  // const OAuth2Client = new OAuth2(
  //   process.env.CLIENT_ID,
  //   process.env.CLIENT_SECRET,
  //   "https://developers.google.com/oauthplayground"
  // );

  // OAuth2Client.setCredentials({
  //   refresh_token: process.env.REFRESH_TOKEN,
  // });

  // const accessToken = await new Promise((resolve, reject) => {
  //   OAuth2Client.getAccessToken((err, token) => {
  //     if (err) {
  //       reject("Failed to create access token :(");
  //     }
  //     resolve(token);
  //   });
  // });

  const transporter = createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken:
        "ya29.A0ARrdaM8-HW5TIjyB96EosqOaJ_kOFJbB-PIqDcWBVs2Cxi3za0vSO-BIiK7F6JbWO_tzyZhxdLkRntIC2M-k9cnrGeazne5_dMyThOugrT3RB-Kh9ZW5XZ9ZFbP5m8wDNKXqYfWMjKfCF0iEUcyCxxuLdLwY",
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

  // try {
  //   const transporter = createTransport({
  //     port: 465,
  //     host: "smtp.gmail.com",
  //     auth: {
  //       user: "damakin.co@gmail.com",
  //       pass: process.env.password,
  //     },
  //     secure: true,
  //   });

  //   const mailData = {
  //     from: "damakin.co@gmail.com",
  //     to: "damak.dev@gmail.com",
  //     subject: `Message From ${data.name}`,
  //     text: `${data.message} \n\nEmail Address: ${data.email}`,
  //   };

  //   await transporter.sendMail(mailData);
  //   res.status(200).json({ message: "Success ✔", type: "success" });
  // } catch (error) {
  //   res.status(400).json({
  //     message: "An error occurred, please try again. ✖",
  //     type: "error",
  //   });
  // }
}
