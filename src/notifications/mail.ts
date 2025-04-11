import nodemailer from 'nodemailer';
import config from '@/config/config';

const transporter = nodemailer.createTransport({
  host: config.mail.host,
  auth: {
    user: config.mail.user,
    pass: config.mail.pass,
  },
});

type MailPayload = {
  template?: string;
  subject: string;
  html?: string;
  to: string
}

const sendMail = (payload: MailPayload, objet: Object) => {
  return transporter.sendMail({
    from: '"Mercato" <mercato@ethereal.email>',
    to: payload.to,
    subject: payload.subject,
    html: payload.html, // html body
  });

};

export default sendMail;
