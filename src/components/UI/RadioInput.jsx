import styles from "./RadioInput.module.scss";

const RadioInput = ({ data, title }) => {
  return (
    <form className={styles.container}>
      <legend>{title}</legend>

      <div className={styles.itemContainer}>
        {data.map((item, i) => (
          <div key={i}>
            <input
              type="radio"
              id={item.name}
              className={styles.input}
              value={item.name}
              name={title}
              disabled={!item.isAvailable}
            />
            <label
              title={item.name}
              htmlFor={item.name}
              style={item.color ? { backgroundColor: item.color } : undefined}
              className={item.color ? styles.color : styles.label}
            >
              {item.symbol}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default RadioInput;
