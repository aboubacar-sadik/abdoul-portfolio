import EmailTemplate from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL

export async function POST(request) {
    try {
        const body = await request.json()
        const { name, email, subject, content } = body

        if (!name || !email || !content) {
            NextResponse.json({ message: "INVALID_PARAMETER" }, { status: 405 });
            return;
        }

        const message = content
            .replace(/\n/g, "<br>")
            .replace(/\r/g, "<br>")
            .replace(/\t/g, "<br>")
            .replace(/<(?!br\s*\/?)[^>]+>/g, ""); // supprime tout le html en autorisant uniquement les balises ,<br>

        const data = await resend.emails.send({
            from: `Contact Portfolio <${myEmail}>`,
            to: myEmail,
            subject: 'You just received a message from your Portfolio Website',
            react: EmailTemplate({ clientName: name, clientEmail: email, messageSubject: subject, messageContent: message }),
        });

        return NextResponse.json(data, { message: 'Message sent successfuly' }, { status: 200 });
    } catch (error) {
        console.log(error);
    }

}