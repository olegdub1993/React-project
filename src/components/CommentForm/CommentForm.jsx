import { useState } from "react";
import { PosItem } from "../PostItem/PostItem";
import { MyButton } from "../UI/button/MyButton";
import { MyInput } from "../UI/input/MyInput";
import styles from "./CommentForm.module.css";
export const CommentForm = ({ create }) => {
  const [comment, setComment] = useState({ name: "", body: "" });
  const onClickHandler = (e) => {
    e.preventDefault();
    create({ id: Date.now(), ...comment });
    setComment({ name: "", body: "" });
  };
  return (
    <form>
      <MyInput
        placeholder="title"
        value={comment.name}
        onChange={(e) => setComment({ ...comment, name: e.target.value })}
      />
      <MyInput
        placeholder="description"
        value={comment.body}
        onChange={(e) => setComment({ ...comment, body: e.target.value })}
      />
      <MyButton onClick={onClickHandler}>Create Comment</MyButton>
    </form>
  );
};
