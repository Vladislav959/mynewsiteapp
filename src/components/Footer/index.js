import styles from './index.module.css';
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Владислав Губарев, {new Date().getFullYear()} год.</p>
        </footer>
    )
}