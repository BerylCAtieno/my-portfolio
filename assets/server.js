const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "your-email@gmail.com", // Replace with your email
                pass: "your-email-password", // Replace with your email password or app password
            },
        });

        // Send email to your address
        await transporter.sendMail({
            from: email,
            to: "berylatieno30@gmail.com",
            subject: `New Message from ${name}`,
            text: message,
        });

        // Send confirmation email to the user
        await transporter.sendMail({
            from: "your-email@gmail.com",
            to: email,
            subject: "Message Received",
            text: `Hello ${name},\n\nThank you for contacting us. We have received your message and will respond soon.\n\nBest Regards,\nYour Company`,
        });

        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send email");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
