import { PosItem } from "../PostItem/PostItem";
import styles from "./PostList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export const PostList = ({ posts, removePost }) => {
  if (!posts.length) return <h2>There is no posts</h2>;
  return (
    <div className={styles.list}>
      <h1> My Posts</h1>
      <TransitionGroup>
        {posts.map((p, i) => (
          <CSSTransition key={p.id} timeout={500} classNames="post">
            <PosItem number={i + 1} post={p} removePost={removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
