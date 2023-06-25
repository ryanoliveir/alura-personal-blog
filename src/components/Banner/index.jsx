import styles from './Banner.module.css'
const Banner = () => {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.title}>
                    Personal Blog
                </h1>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure vero facere optio minus repellendus aut. 
                    Ipsam qui quia, natus distinctio, obcaecati sapiente quae velit explicabo odio, accusantium eveniet voluptatem.
                </p>
            </div>

            <div className={styles.images}>
                <img 
                    className={styles.colorfull_circle} 
                    src={process.env.PUBLIC_URL +"/assets/colorfull_circle.png"}
                    alt='Colorfull circle'
                    aria-hidden={true}
                />

                <img className={styles.personal_picture} 
                    src={process.env.PUBLIC_URL +"/assets/minha_foto.png"} 
                    alt="Personal"
                />
            </div>
        </div>
    )
}


export default Banner;