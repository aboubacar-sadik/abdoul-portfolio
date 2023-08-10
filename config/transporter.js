import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    ///// host: 'smtp.hostinger.com', Pour hostinger
    port: 8080,
    secure: true, // Change it to false if you wanted another port than 465
    auth: {
        user: email,
        pass: pass
    }
})

export const mailOptions = {
    from: email,
    to: email
}