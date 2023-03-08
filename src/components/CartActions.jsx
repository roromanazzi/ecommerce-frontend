import React from "react";
import Button from "./UI/Button";
import styles from "./WishlistActions.module.scss";

export const CartActions = () => {
  return (
    <div className={styles.actionsContainer}>
      <Button variant={"primary"}>*- icon*</Button>
      <Button variant={"primary"}>*+ icon*</Button>
      <Button variant={"secondary"}>*X icon*</Button>
    </div>
  );
};
