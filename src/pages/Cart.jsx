import React from "react";
import { AddressForm } from "../components/Forms/Address/AddressForms";
import { Table } from "../components/UI/Table";
import { TitleLayout } from "./Root";

const CartPage = () => {
  return (
    <div>
      <TitleLayout title={"Cart"} />
      <Table />
    </div>
  );
};

export default CartPage;
