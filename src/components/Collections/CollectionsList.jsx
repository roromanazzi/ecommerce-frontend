import { Link } from "react-router-dom";
import styles from "./CollectionsList.module.scss";

export const CollectionsList = ({ collections }) => {
  return (
    <div className={styles.container}>
      {collections.map((collection) => (
        <Link
          to={collection.name}
          key={collection.id}
          className={styles.collectionCard}
          style={{ backgroundImage: `url(${collection.imgSrc})` }}
        >
          <h3 className={styles.season}>{collection.season}</h3>
          <h2 className={styles.title}>{collection.name}</h2>
          <h3 className={styles.designer}>{collection.designer}</h3>
        </Link>
      ))}
    </div>
  );
};
