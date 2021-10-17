import styles from "./MySelect.module.css";
export const MySelect = ({ option, defaultValue, onChange, selectedSort }) => {
  return (
    <select
      className={styles.select}
      value={selectedSort}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {option.map((o) => (
        <option value={o.value} key={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
};
