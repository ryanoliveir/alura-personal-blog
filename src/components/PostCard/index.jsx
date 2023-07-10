import { Link } from 'react-router-dom';
import styles from './Post.module.css'
import Button from 'components/Button'
const PostCard  = ({post}) => {
    return (
      <Link to={`/posts/${post.id}`}>
        <div className={styles.post}>
          <img 
            className={styles.cover_photo} 
            src={process.env.PUBLIC_URL + `/assets/posts/${post.id}/cover.png`} 
            alt="Cover" 
            /> 

          <h2 className={styles.title}>{post.title}</h2>
      
          <Button>Read</Button>
        </div>
      </Link>
    )
}

export default PostCard;