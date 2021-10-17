import { useHistory } from "react-router";
import { MyButton } from "../UI/button/MyButton";
import styles from "./PostItem.module.css";
export const PosItem = ({ post, removePost, number }) => {
  const history = useHistory();
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <strong>
          {number}. {post.title}
        </strong>
        <div> {post.body}</div>
      </div>
      <div>
        <MyButton
          className={styles.button}
          onClick={() => {
            history.push(`./posts/${post.id}`);
          }}
        >
          see more
        </MyButton>
        <MyButton className={styles.button} onClick={() => removePost(post.id)}>
          delete
        </MyButton>
      </div>
    </div>
  );
};
