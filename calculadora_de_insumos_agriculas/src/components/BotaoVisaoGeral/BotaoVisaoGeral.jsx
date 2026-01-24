import styles from './BotaoVisaoGeral.module.css';
import visaogeral from '../../assets/visaogeral.svg';
import visaogeral_active from '../../assets/visaogeral_active.svg';

export default function VisaoGeral({ isActive, isCollapsed }) {
  return (
   
    <div className={`
      ${styles.item} 
      ${isActive ? styles.active : ''} 
      ${isCollapsed ? styles.collapsed : ''}
    `}>
      <img 
        src={isActive ? visaogeral_active : visaogeral} 
        alt="Visão Geral"
        className={styles.icon} 
      />
      
      {!isCollapsed && <span className={styles.label}>Visão Geral</span>}
    </div>
  );
}