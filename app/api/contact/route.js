import EmailTemplate from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL

export async function POST(request) {
    try {
        const body = await request.json()
        const { name, email, subject, content } = body

        const message = content
            .replace(/\n/g, "<br>")
            .replace(/\r/g, "<br>")
            .replace(/\t/g, "<br>")
            .replace(/<(?!br\s*\/?)[^>]+>/g, ""); // supprime tout le html en autorisant uniquement les balises <br>

        const data = await resend.emails.send({
            from: `Tomess <${myEmail}>`,
            to: myEmail,
            subject: 'Hello world',
            react: EmailTemplate({ clientName: name, clientEmail: email, messageSubject: subject, messageContent: message }),
        });

        console.log(toEmail);
        // if (data.status === 'success') {
        //     return NextResponse.json({ message: 'Message sent succesfully' })
        // }

        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
    }

}