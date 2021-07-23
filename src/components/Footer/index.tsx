import Image from "next/image";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© 2021 Barca Locações. Todos os direitos reservados.</span>
      <span className={styles.facebook}>
        Curta nossa página:{" "}
        <a href="http://www.facebook.com.br/BarcaLocacoes">
          <Image
            src="/facebook_icon.svg"
            alt="Ícone do Facebook"
            width={20}
            height={20}
          />
        </a>
      </span>
    </footer>
  );
}
