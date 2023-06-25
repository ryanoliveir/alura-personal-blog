import Banner from 'components/Banner';
import Post from 'components/Post';
import styles from './Home.module.css'
import posts from 'posts_content/posts.json';

const Home = () => {
    return (
        <main>
            <Banner />
            <ul class={styles.posts}>
                {posts.map(post  => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Home;