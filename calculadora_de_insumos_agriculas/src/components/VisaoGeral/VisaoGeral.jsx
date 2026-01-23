import styles from './VisaoGeral.module.css';
import visaogeral from '../../assets/visaogeral.svg';
import visaogeral_active from '../../assets/visaogeral_active.svg';

export default function SidebarItem({ isActive, isCollapsed }) {
  return (
    <div className={`${styles.item} ${isActive ? styles.active : ''}`}>
      {/* troca o ícone se estiver ativo */}
      <img 
        src={isActive ? visaogeral_active : visaogeral} 
        className={styles.visaogeral} 
      />
      
      {!isCollapsed && <span className={styles.label}>Visão Geral</span>}
    </div>
    
  );
}