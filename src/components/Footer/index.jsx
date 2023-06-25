import styles from './Footer.module.css';
import Trademark from 'components/TradeMark';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Trademark />
            Desevolvido por Alura
        </footer>

    )
}

export default Footer;