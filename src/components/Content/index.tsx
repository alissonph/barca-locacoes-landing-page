import { useEffect, useRef } from "react";

import ContactForm from "../ContactForm";
import { useHome } from "../../contexts/HomeContext";
import { prefix } from "../../utils/prefix";

import styles from "./styles.module.scss";

export default function Content() {
  const { isScrollingToAboutUs, isScrollingToContact, finishScroll } =
    useHome();

  const aboutUsRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);

  function scrollToAboutUs() {
    if (aboutUsRef && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollToContact() {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (isScrollingToAboutUs) {
      scrollToAboutUs();
      finishScroll();
    }
  }, [isScrollingToAboutUs, finishScroll]);

  useEffect(() => {
    if (isScrollingToContact) {
      scrollToContact();
      finishScroll();
    }
  }, [isScrollingToContact, finishScroll]);

  return (
    <div className={styles.container}>
      <h1 ref={aboutUsRef}>SOBRE NÓS</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div>
            <p>
              A Barca Locações é uma empresa de locações de materias para festas
              e eventos (cadeiras, mesas, toalhas).
            </p>
            <p>
              Situada em Artur Nogueira, prestamos serviços para a própria
              cidade, para Cosmópolis, Engenheiro Coelho e Holambra (outras
              cidades sob consulta).
            </p>
            <p>Nossos produtos:</p>
            <ul>
              <li>
                Cadeiras com logotipo da empresa estampada, de alta qualidade.
              </li>
              <li>
                Mesas com logotipo da empresa estampada, de alta qualidade.
              </li>
              <li>Toalhas em várias cores. Tecido especial.</li>
            </ul>
          </div>
          <img src={`${prefix}/400x400.png`} alt="Imagem" />
        </div>
      </div>

      <h1 ref={contactRef}>CONTATO</h1>
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
