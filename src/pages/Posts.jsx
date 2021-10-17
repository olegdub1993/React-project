import { PostList } from "./../components/PostList/PostList";
import { useEffect, useRef, useState } from "react";
import { MyButton } from "./../components/UI/button/MyButton";
import { MyInput } from "./../components/UI/input/MyInput";
import { PostForm } from "./../components/PostForm/PostForm";
import { MySelect } from "./../components/UI/select/MySelect";
import { PostFilter } from "./../components/PostFilter/PostFilter";
import { MyModal } from "./../components/UI/modal/MyModal";
import { usePosts } from "./../hooks/usePosts";
import { PostService } from "./../API/postService";
import { Loader } from "./../components/UI/loader/Loader";
import { useFetching } from "./../hooks/useFetching";
import { getPagesCount } from "./../utils/pages";
import { Pagination } from "./../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ selectedSort: "", searchQuary: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    setTotalPages(getPagesCount(response.headers["x-total-count"], limit));
  });
  useEffect(() => {
    fetchPosts();
  }, [page, limit]);
  useObserver(lastElement, page < totalPages, isPostsLoading, () =>
    setPage(page + 1)
  );
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };
  const sortedAndSearchedPosts = usePosts(
    posts,
    filter.selectedSort,
    filter.searchQuary
  );
  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <div>{postError}</div>}
      {isPostsLoading && <Loader />}
      {/* <MySelect
        option={[
          { name: "5", value: 5 },
          { name: "10", value: 10 },
          { name: "15", value: 15 },
          { name: "show all", value: -1 },
        ]}
        onChange={setLimit}
        selectedSort={limit}
        defaultValue="Amount of elements"
      /> */}
      <PostList posts={sortedAndSearchedPosts} removePost={removePost} />
      <div ref={lastElement}></div>
      {/* <Pagination
        totalPages={totalPages}
        currentPage={page}
        setPage={setPage}
      /> */}
    </div>
  );
}

export default Posts;
