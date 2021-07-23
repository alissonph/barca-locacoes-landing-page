import Image from "next/image";

import ContactForm from "../ContactForm";

import styles from "./styles.module.scss";

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src="/200.png" alt="Teste" width={200} height={200} />
          <span>
            Cadeiras com logotipo da empresa estampada, de alta qualidade.
          </span>
        </div>
        <div className={styles.card}>
          <Image src="/200.png" alt="Teste" width={200} height={200} />
          <span>
            Mesas com logotipo da empresa estampada, de alta qualidade.
          </span>
        </div>
        <div className={styles.card}>
          <Image src="/200.png" alt="Teste" width={200} height={200} />
          <span>Toalhas em várias cores. Tecido especial.</span>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
