import nodemailer from "nodemailer";

export const mailer = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASS,
    },
});
