import styles from './Modal.module.css'

export default function Modal({ pkmCardDetail, onClose }) {
  if (!pkmCardDetail) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.header}>
          <img
            src={pkmCardDetail.sprites.other.home['front_default']}
            alt={pkmCardDetail.name}
          />
          <h2>{pkmCardDetail.name}</h2>
        </div>
        <p className={styles.regular}>Description</p>
        <p className={styles.description}>{pkmCardDetail.description}</p>

        <div className={styles.stats}>
          <div className={styles.item}>
            <span className={styles.regular}>Gender</span>
            <span className={styles.big}>{pkmCardDetail.gender}</span>
            
          </div>
          <div className={styles.item}>
            <span className={styles.regular}>Abilities</span>
            <span className={styles.big}>{pkmCardDetail.abilities.map((a) => a.ability.name).join(', ')}</span>
            
          </div>
          <div className={styles.item}>
            <span className={styles.regular}>Base Stat</span>
            <span className={styles.big}>{pkmCardDetail.stats[0].base_stat}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
