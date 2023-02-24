import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Contato.module.css";

export default function Contato() {
    
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Contato</h1>
        <div className={styles.contact}>
          <div className={styles.info}>
            <h2>Entre em contato:</h2>
            <p>
              <strong>Email:</strong> contato@minhaempresa.com
            </p>
            <p>
              <strong>Telefone:</strong> (11) 1234-5678
            </p>
          </div>
          <div className={styles.photo}>
            <video autoPlay muted loop playsInline width="340" height="360" controls>
              <source src="/images/Conect.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
