import { useState } from "react";
import { PosItem } from "../PostItem/PostItem";
import { MyButton } from "../UI/button/MyButton";
import { MyInput } from "../UI/input/MyInput";
import styles from "./PostList.module.css";
export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const onClickHandler = (e) => {
    e.preventDefault();
    create({ id: Date.now(), ...post });
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <MyInput
        placeholder="title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        placeholder="description"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={onClickHandler}>Create Post</MyButton>
    </form>
  );
};
