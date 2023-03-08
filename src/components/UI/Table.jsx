import React from "react";
import styles from "./Table.module.scss";

export const Table = ({ actions }) => {
  const data = [
    {
      title: "remera pedro",
      price: 2500,
      size: "S",
      src: "../img/JennyHaniver.svg",
    },
  ];

  return (
    <table className={styles.container}>
      {data.map((product) => (
        <>
          <tr key={product.title} className={styles.row}>
            <div className={styles.productInfo}>
              {product.src && (
                <td className={styles.productImg}>
                  <img src={product.src} />
                </td>
              )}
              <td className={styles.productTitle}>{product.title}</td>
              {product.amount && (
                <td className={styles.productAmount}>
                  <span className={styles.extraText}>size</span>
                  {product.amount}
                </td>
              )}
              <td className={styles.productSize}>
                <span className={styles.extraText}>size</span> {product.size}
              </td>
            </div>
            <div className={styles.productActions}>
              <td className={styles.productPrice}>${product.price}</td>
              {actions && <td className={styles.productActions}>{actions}</td>}
            </div>
          </tr>
        </>
      ))}
    </table>
  );
};
