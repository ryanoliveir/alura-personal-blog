import PostCard from 'components/PostCard';
import styles from './RecomendedPosts.module.css'


const RecomendedPosts = ({currentPostId, posts}) => {

    console.log(currentPostId);
    console.log(posts);
    const recomendedPosts = posts.filter((post) => post.id !== currentPostId).slice(0,4);

    console.log(recomendedPosts);


    return (
        <section className={styles.container_post_recommended}>
            <h1 className={styles.title}>Outros posts que você pode gostar:</h1>
            <ul className={styles.post_selected}>
                {recomendedPosts.map(post => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default RecomendedPosts;
