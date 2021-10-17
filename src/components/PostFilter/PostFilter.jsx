import { PosItem } from "../PostItem/PostItem";
import { MyInput } from "../UI/input/MyInput";
import { MySelect } from "../UI/select/MySelect";
import styles from "./PostList.module.css";
export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className={styles.list}>
      <MyInput
        placeholder="search"
        value={filter.searchQuary}
        onChange={(e) => setFilter({ ...filter, searchQuary: e.target.value })}
      />
      <MySelect
        onChange={(selectedSort) =>
          setFilter({ ...filter, selectedSort: selectedSort })
        }
        selectedSort={filter.selectedSort}
        option={[
          { name: "title", value: "title" },
          { name: "description", value: "body" },
        ]}
        defaultValue="Sort by"
      />
    </div>
  );
};
