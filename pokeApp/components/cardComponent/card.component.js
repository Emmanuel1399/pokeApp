import styles from './card.module.css'

export default function Card({ pkmCardDetail }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img
          src={pkmCardDetail.sprites.other.home['front_default']}
          alt={pkmCardDetail.name}
        />
      </div>
      <div className={styles.bottom}>
        <span className={styles.title}>{pkmCardDetail.name}</span>
        <div className={styles.row}>
          <div className={styles.item}>
            <span className={styles.big}>{pkmCardDetail.gender}</span>
            <span className={styles.regular}>Gender</span>
          </div>
          <div className={styles.item}>
            <span className={styles.big}>{pkmCardDetail.abilities.length}</span>
            <span className={styles.regular}>Abilities</span>
          </div>
          <div className={styles.item}>
            <span className={styles.big}>{pkmCardDetail.stats[0].base_stat}</span>
            <span className={styles.regular}>Base Stat</span>
          </div>
        </div>
      </div>
    </div>
  )
}
