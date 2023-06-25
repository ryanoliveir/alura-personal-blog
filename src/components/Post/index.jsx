import styles from './Post.module.css'
const Post  = ({post}) => {
    return (
        <div className={styles.post}>
          <img 
            className={styles.cover_photo} 
            src={process.env.PUBLIC_URL + `assets/posts/${post.id}/capa.png`} 
            alt="Cover" 
          /> 

          <h2 className={styles.title}>{post.titulo}</h2>
          <button className={styles.read_button}>Read</button>
        </div>
    )
}

export default Post