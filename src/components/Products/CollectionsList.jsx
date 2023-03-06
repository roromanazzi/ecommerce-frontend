import { Link } from "react-router-dom";
import styles from "./CollectionsList.module.scss";

export const CollectionsList = () => {
  const data = [
    {
      id: 4,
      title: "Seawolf collection",
      season: "SS 2024",
      designer: "Pepito Pérez",
      isLatest: true,
      imgSrc:
        "https://image-cdn.hypb.st/http%3A%2F%2Fhypebeast.com%2Fimage%2F2016%2F09%2Fstreetwear-fashion-photographers-vicky-grout-2.jpg?w=1600&cbr=1&q=90&fit=max",
    },
    // {
    //   id: 1,
    //   title: "",
    //   season: "AW 2023",
    //   designer: "Pepito Pérez",
    //   isLatest: false,
    //   imgSrc:
    //     "https://images.squarespace-cdn.com/content/v1/583b7c31e58c622c2543bfc4/1481048256483-07N92IKL6IJ1DLM4KK7T/with-logo-1.jpg?format=2500w",
    // },
    {
      id: 2,
      title: "Global warming collection",
      season: "SS 2022",
      designer: "Ramiro López",
      isLatest: false,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0165/4870/files/Streetwear-garden-grove-photo-shoot-2.jpg?17566181147786155578",
    },
    {
      id: 3,
      title: "Original Union collection",
      season: "AW 2022",
      designer: "Tini Stoessel",
      isLatest: false,
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/583b7c31e58c622c2543bfc4/1481048256483-07N92IKL6IJ1DLM4KK7T/with-logo-1.jpg?format=2500w",
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((collection) => (
        <Link
          key={collection.id}
          className={styles.newArrival}
          style={{ backgroundImage: `url(${collection.imgSrc})` }}
        >
          <h3 className={styles.season}>{collection.season}</h3>
          <h2 className={styles.title}>{collection.title}</h2>
          <h3 className={styles.designer}>{collection.designer}</h3>
        </Link>
      ))}
    </div>
  );
};
