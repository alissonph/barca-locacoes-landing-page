import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { prefix } from '../../utils/prefix';
import Loading from '../Loading';

import styles from './styles.module.scss';

type ContactForm = {
  subject: string;
  name: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data: ContactForm) {
    data.subject = `Barca Locações - Contato via site - ${new Date().toLocaleString('pt-BR')}`;
    data.message = `Nome: ${data.name} - Telefone: ${data.phone} - Mensagem: ${data.message}`;

    try {
      setLoading(true);
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });

      toast.success('E-mail enviado com sucesso, em breve entraremos em contato.', {
        position: 'bottom-center',
        autoClose: 5000,
      });

      reset();
    } catch (error) {
      toast.error('Erro ao enviar o e-mail, por favor tente novamente.', {
        position: 'bottom-center',
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

  function openWhatsappLink() {
    window.open(
      'https://api.whatsapp.com/send?phone=5519996946870&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento',
      '_blank'
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <span>
          <b>Informações de Contato</b>
        </span>
        <span>Telefone: (19) 3877-2438</span>
        <span>Celular: (19) 99694-6870 VIVO</span>
      </div>
      <button className={styles.buttonWhatsapp} type="button" onClick={openWhatsappLink}>
        Solicitar Orçamento via Whatsapp
        <img src={`${prefix}/whatsapp_icon.png`} alt="Ícone do Whatsapp" />
      </button>
      <span>OU</span>
      <div className={styles.formContainer}>
        <span>Entre em contato através do formulário abaixo:</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" {...register('name', { required: true })} />
            {errors.name?.type === 'required' && (
              <span className={styles.errorMessage}>Nome é obrigatório.</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Telefone:</label>
            <input type="text" id="phone" {...register('phone', { required: true })} />
            {errors.phone?.type === 'required' && (
              <span className={styles.errorMessage}>Telefone é obrigatório.</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              {...register('message', { required: true })}
              defaultValue="Olá, gostaria de um orçamento"
              rows={4}></textarea>
            {errors.message?.type === 'required' && (
              <span className={styles.errorMessage}>Mensagem é obrigatório.</span>
            )}
          </div>

          <button type="submit" className={styles.buttonSend}>
            {loading ? <Loading /> : 'Enviar'}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}
