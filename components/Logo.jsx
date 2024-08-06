import styles from './Logo.module.css'

export default function Logo() {
    return <div className={styles.logo}>
        <div className={styles.title}>
            <div>Logique de</div>
            <span>Programmation</span>
        </div>
    </div>
}
