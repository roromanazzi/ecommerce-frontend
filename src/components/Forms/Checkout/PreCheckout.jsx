import React from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

export const PreCheckoutForm = () => {
  return (
    <div>
      <Input variant={"shortInput"} />
      <Input variant={"shortInput"} />
      <Button>Finalizar compra</Button>
    </div>
  );
};
