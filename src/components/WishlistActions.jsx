import React from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import styles from "./WishlistActions.module.scss";

export const WishlistActions = () => {
  return (
    <div className={styles.actionsContainer}>
      <Input variant={"noLabelInput"} placeholder="Cantidad" />
      <Button variant={"primary"}>*cart icon*</Button>
      <Button variant={"secondary"}>*corazon tachado*</Button>
    </div>
  );
};
