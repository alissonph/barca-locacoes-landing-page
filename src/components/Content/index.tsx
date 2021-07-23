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

      <div className={styles.contactContainer}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Artur+Nogueira+-+S%C3%A3o+Paulo,+Rep%C3%BAblica+Federativa+do+Brasil&amp;aq=3&amp;oq=Ar&amp;sll=37.09024,-95.537109&amp;sspn=48.287373,107.138672&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=Artur+Nogueira+-+S%C3%A3o+Paulo,+Rep%C3%BAblica+Federativa+do+Brasil&amp;z=12&amp;ll=-22.573136,-47.172433&amp;output=embed"
        ></iframe>
        <ContactForm />
      </div>
    </div>
  );
}
