import Head from "next/head";
import Header from "../src/components/Header";
import styles from "../src/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Barca Locações</title>
        <meta name="description" content="Site da Barca Locações" />
      </Head>

      <Header />

      <main className={styles.main}>TESTE</main>

      <footer className={styles.footer}>
        <span>© 2021 Barca Locações. Todos os direitos reservados.</span>
        <span>Curta nossa página: FACEBOOK</span>
      </footer>
    </div>
  );
}
