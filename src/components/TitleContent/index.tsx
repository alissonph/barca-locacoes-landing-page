import styles from './styles.module.scss';

export default function TitleContent() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.titleContainer}>
          <span className={styles.title}>
            LOCAÇÃO DE MESAS, CADEIRAS, TOALHAS PARA FESTAS E EVENTOS.
          </span>
          <span className={styles.subTitle}>
            A Barca locações trabalha com os seguintes serviços: Locação de mesas, cadeiras,
            toalhas. Para festas e eventos. Atendemos nas seguintes cidades: Artur Nogueira,
            Cosmópolis, Engenheiro Coelho e Holambra (Outras cidades sob consulta).
          </span>
        </div>
      </div>
    </div>
  );
}
