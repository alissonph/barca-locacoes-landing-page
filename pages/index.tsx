import Head from "next/head";

import Header from "../src/components/Header";
import TitleContent from "../src/components/TitleContent";
import Content from "../src/components/Content";
import Footer from "../src/components/Footer";

import styles from "../src/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Barca Locações</title>
        <meta name="description" content="Site da Barca Locações" />
      </Head>

      <Header />

      <main className={styles.main}>
        <TitleContent />
      </main>

      <main className={styles.mainSecondary}>
        <Content />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
