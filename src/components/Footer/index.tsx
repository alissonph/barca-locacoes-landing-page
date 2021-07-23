import Image from "next/image";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span>© 2021 Barca Locações. Todos os direitos reservados.</span>
      <span className={styles.facebook}>
        Curta nossa página:{" "}
        <a href="http://www.facebook.com.br/BarcaLocacoes">
          <img src="/facebook_icon.svg" alt="Ícone do Facebook" />
        </a>
      </span>
    </div>
  );
}
