import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";

type ContactForm = {
  subject: string;
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

  return (
    <div className={styles.container}>
      <button type="button">Solicitar Orçamento Whatsapp</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="subject">Assunto:</label>
          <input
            type="text"
            id="subject"
            {...register("subject", { required: true })}
          />
          {errors.subject?.type === "required" && "Assunto é obrigatório."}
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message?.type === "required" && "Mensagem é obrigatório."}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
