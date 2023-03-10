import React from "react";
import Button from "./UI/Button";
import styles from "./WishlistActions.module.scss";

export const CartActions = () => {
  return (
    <div className={styles.actionsContainer}>
      <Button variant={"iconLeft"}>-</Button>
      <Button variant={"iconRight"}>+</Button>
      <Button variant={"iconSecondary"}>x</Button>
    </div>
  );
};
