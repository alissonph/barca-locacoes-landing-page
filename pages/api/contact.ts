//import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

//sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Enviado com sucesso!' })

  /*const { email, subject, message, name } = req.body
  const msg = {
    to: '<your-email@example.com',
    from: email,
    subject,
    name,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }*/
}