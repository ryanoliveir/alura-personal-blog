// import styles from './Post.module.css'
import './Post.css'
import { useParams } from 'react-router-dom';
import posts_db from 'posts_content/posts.json';
import PostModel from 'components/PostModel';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const Post = () => {

    const { id } = useParams();
    const posts = posts_db;
    

    const post = posts.find((post) => {
        return post.id === Number(id);
    });


    console.log(post);

    return (
        <PostModel 
          coverImage={`posts/${id}/cover.png`}
          postTitle={post.title}
        >
          <div className="post-markdown-container">
            <ReactMarkdown>
              {post.text}
            </ReactMarkdown>
          </div>
        </PostModel>
    )
}


export default Post;
