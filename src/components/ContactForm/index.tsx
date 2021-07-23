import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";

type ContactForm = {
  name: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: ContactForm) {
    console.log(data);
  }

  function openWhatsappLink() {
    window.open(
      "https://api.whatsapp.com/send?phone=5519996946870&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento",
      "_blank"
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
        <span>
          E-mail:{" "}
          <a href="mailto:contato@barcalocacoes.com.br">
            contato@barcalocacoes.com.br
          </a>
        </span>
      </div>
      <button
        className={styles.buttonWhatsapp}
        type="button"
        onClick={openWhatsappLink}
      >
        Solicitar Orçamento via Whatsapp
        <img src="/whatsapp_icon.png" alt="Ícone do Whatsapp" />
      </button>
      <span>OU</span>
      <div className={styles.formContainer}>
        <span>Entre em contato através do formulário abaixo:</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <span className={styles.errorMessage}>Nome é obrigatório.</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Telefone:</label>
            <input
              type="text"
              id="phone"
              {...register("phone", { required: true })}
            />
            {errors.phone?.type === "required" && (
              <span className={styles.errorMessage}>
                Telefone é obrigatório.
              </span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              defaultValue="Olá, gostaria de um orçamento"
              rows={4}
            ></textarea>
            {errors.message?.type === "required" && (
              <span className={styles.errorMessage}>
                Mensagem é obrigatório.
              </span>
            )}
          </div>

          <button type="submit" className={styles.buttonSend}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
