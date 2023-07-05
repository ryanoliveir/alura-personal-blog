import Post from 'components/Post';
import styles from './Home.module.css'
import posts from 'posts_content/posts.json';


const Home = () => {
    return (
        <ul className={styles.posts}>
            {posts.map(post  => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>

    )
}

export default Home;