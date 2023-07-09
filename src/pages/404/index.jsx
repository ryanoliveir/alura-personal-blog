import styles from './404.module.css'
import BackButton from 'components/BackButton';

const NotFound = () => {

    return (
        <>
            <div className={styles.content_container}>
                <span className={styles.error_code_text}>404</span>
                <h1 className={styles.title}>
                    Ops, página não encontrada
                </h1>
                <p className={styles.message}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.message}>
                    Aguarde uns instantes e recarregue a página, ou volte 
                    para a página inicial.
                </p>

                <div className={styles.container_button}>
                    <BackButton size="lg">Voltar</BackButton>
                </div>

                <img className={styles.dog_image} 
                    src={process.env.PUBLIC_URL + '/assets/error_404.png'} 
                    alt="Dog"
                    />
            </div>
            <div className={styles.white_space}></div>
        </>
    )
}

export default NotFound;

