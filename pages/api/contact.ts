import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

const EMAIL_API_KEY = process.env.EMAIL_API_KEY || '';
sgMail.setApiKey(EMAIL_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { subject, message, name } = req.body
    const msg = {
      to: 'rolandoh@outlook.com.br',
      from: 'contato.barcalocacoes@gmail.com',
      subject,
      name,
      text: message,
    };

    try {
      await sgMail.send(msg);
      res.json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao enviar e-mail' });
    }
  } else {
    res.status(404).json({ error: 'Método não encontrado.' });
  }
}