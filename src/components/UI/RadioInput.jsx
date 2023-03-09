import styles from "./RadioInput.module.scss";

const RadioInput = ({ data, title, name, defaultChecked }) => {
  return (
    <div className={styles.container}>
      <legend>{title}</legend>

      <div className={styles.itemContainer}>
        {data.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.name}
              className={styles.input}
              value={item.name}
              name={name}
              defaultChecked={defaultChecked}
              disabled={!item.isAvailable}
            />
            <label
              title={item.name}
              htmlFor={item.name}
              style={
                item.color && item.isAvailable
                  ? { backgroundColor: item.color }
                  : undefined
              }
              className={item.color ? styles.color : styles.label}
            >
              {item.symbol}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
