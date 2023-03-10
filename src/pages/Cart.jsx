import React from "react";
import { AddressForm } from "../components/Forms/Address/AddressForms";
import { PreCheckoutForm } from "../components/Forms/Checkout/PreCheckout";
import { Table } from "../components/UI/Table";
import { TitleLayout } from "./Root";
import styles from "./Cart.module.scss";
import { CartActions } from "../components/CartActions";

const CartPage = () => {
  return (
    <div className={styles.page}>
      <TitleLayout title={"Cart"} />
      <div className={styles.container}>
        <Table className={styles.table} actions={<CartActions />} />
        <PreCheckoutForm className={styles.form} />
      </div>
    </div>
  );
};

export default CartPage;
