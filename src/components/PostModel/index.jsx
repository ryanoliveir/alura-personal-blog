import styles from './PostModel.module.css';


const PostModel = ({coverImage, postTitle, children}) => {
    console.log(process.env.PUBLIC_URL + `assets/${coverImage}`);
    return (
        <article className={styles.post_model_container} >
            <div className={styles.cover_image}>
                <img src={process.env.PUBLIC_URL + `/assets/${coverImage}`} alt="Post cover" />
            </div>

            <h2 className={styles.title}>{postTitle}</h2>
            <div className={styles.post_content_container}>
                {children}
            </div>
        </article>

    )
}


export default PostModel;