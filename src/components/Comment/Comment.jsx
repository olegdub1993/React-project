import styles from "./Comment.module.css";
export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div>{comment.name}</div>
      <div>{comment.email}</div>
      <div>{comment.body}</div>
    </div>
  );
};
