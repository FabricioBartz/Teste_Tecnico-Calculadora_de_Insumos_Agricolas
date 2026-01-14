import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        {/* Usando um Emoji como placeholder de folha, igual ao design */}
        <span className={styles.leafIcon}>🌿</span>
        <h1 className={styles.brandName}>AgroTech Hub</h1>
      </div>
      
      <div className={styles.userSection}>
        {/* Círculo do perfil do usuário */}
        <div className={styles.userAvatar}>
          👤
        </div>
      </div>
    </nav>
  );
}