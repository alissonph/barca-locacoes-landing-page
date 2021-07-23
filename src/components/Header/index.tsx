import Image from "next/image";
import { useState } from "react";
import { useHome } from "../../contexts/HomeContext";

import styles from "./styles.module.scss";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const { scrollToAboutUs, scrollToContact } = useHome();

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Logotipo da empresa" />

      <nav>
        <button
          type="button"
          className={styles.toggleMenu}
          onClick={toggleMenu}
        >
          <img
            src={menuActive ? "/close_icon.svg" : "/menu_icon.svg"}
            alt="Ícone para abrir e fechar o menu no celular"
          />
        </button>
        <ul className={menuActive ? styles.active : ""}>
          <li onClick={scrollToAboutUs}>Sobre</li>
          <li onClick={scrollToContact}>Contato</li>
        </ul>
      </nav>

      <div className={styles.contact}>
        <span>Ligue já!</span>
        <span>
          Telefone: <b>(19) 3877-2438</b>
        </span>
        <span>
          Celular: <b>(19) 99694-6870</b>
        </span>
      </div>
    </header>
  );
}
