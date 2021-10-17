import styles from "./Post.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PostService } from "../API/postService";
import { Comment } from "../components/Comment/Comment";
import { Loader } from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { MyButton } from "../components/UI/button/MyButton";
import { MyModal } from "../components/UI/modal/MyModal";
import { PostForm } from "../components/PostForm/PostForm";
import { CommentForm } from "../components/CommentForm/CommentForm";
function Post(props) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [modal, setModal] = useState(false);
  const id = useParams().id;
  // const id = props.match.params.id;
  const [fetchPost, isPostsLoaded, postError] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoaded, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsById(id);
      setComments(response.data);
    }
  );
  useEffect(() => {
    fetchPost(id);
  }, []);
  useEffect(() => {
    fetchComments(id);
  }, []);
  const createComment = (newComment) => {
    setComments([...comments, newComment]);
    setModal(false);
  };
  if (isPostsLoaded) return <Loader />;

  return (
    <div className={styles.post}>
      <div>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <div>{post.body}</div>
      </div>
      <div className={styles.comments}>
        <h3>Comments</h3>
        <MyButton onClick={() => setModal(true)}>Create Comment</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <CommentForm create={createComment} />
        </MyModal>
        {isCommentsLoaded ? (
          <Loader />
        ) : (
          <div>
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Post;
