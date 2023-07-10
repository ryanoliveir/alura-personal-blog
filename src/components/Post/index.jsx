// import styles from './Post.module.css'
import './Post.css'
import { Routes, Route, useParams } from 'react-router-dom';
import posts_db from 'posts_content/posts.json';
import PostModel from 'components/PostModel';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from 'pages/404';
import RecomendedPosts from 'components/RecommendedPosts';
import Layout from 'components/Layout';


const Post = () => {

    const { id } = useParams();
    const posts = posts_db;
    

    const post = posts.find((post) => {
        return post.id === Number(id);
    });


    if(!post){
      return <NotFound />
    }

    return (
      <Routes>
        <Route path="*" element={<Layout/>}>
            <Route index element={
              <PostModel 
              coverImage={`posts/${id}/cover.png`}
              postTitle={post.title}
              >
                <div className="post-markdown-container">
                  <ReactMarkdown>
                    {post.text}
                  </ReactMarkdown>
                </div>
                
                <RecomendedPosts currentPostId={Number(id)} posts={posts}/>
              </PostModel>
            }/>
            
        </Route>
      </Routes>
    )
  }


export default Post;
