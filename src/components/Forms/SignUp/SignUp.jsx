import React from "react";
import { Form } from "react-router-dom";
import Button from "../../UI/Button";
import Checkbox from "../../UI/Checkbox";
import Input from "../../UI/Input";

const SignUpForm = () => {
  return (
    <>
      <Form>
        <div className="requiredInfo">
          <Input
            variant={"long-input"}
            label={"Nombre"}
            type={"text"}
            name={"firstName"}
            id={"firstName"}
          ></Input>
          <Input
            variant={"long-input"}
            label={"Apellido"}
            type={"text"}
            name={"lastName"}
            id={"lastName"}
          ></Input>
          <Input
            variant={"long-input"}
            label={"Email"}
            type={"email"}
            name={"email"}
            id={"email"}
          ></Input>
          <div>
            <Input
              variant={"short-input"}
              label={"Contraseña"}
              type={"password"}
              name={"password"}
              id={"password"}
            ></Input>
            <Input
              variant={"short-input"}
              label={"Repetir contraseña"}
              type={"password"}
              name={"comparePassword"}
              id={"comparePassword"}
            ></Input>
          </div>
        </div>
        <div className="unrequiredInfo">
          <Input
            variant={"long-input"}
            label={"Dirección"}
            type={"text"}
            name={"address"}
            id={"address"}
          ></Input>
          <Input
            variant={"long-input"}
            label={"Ciudad"}
            type={"text"}
            name={"city"}
            id={"city"}
          ></Input>
          <div>
            <Input
              variant={"short-input"}
              label={"País"}
              type={"text"}
              name={"country"}
              id={"country"}
            ></Input>
            <Input
              variant={"short-input"}
              label={"CP"}
              type={"text"}
              name={"postalCode"}
              id={"postalCode"}
            ></Input>
          </div>
          <Input
            variant={"long-input"}
            label={"Teléfono"}
            type={"number"}
            name={"phoneNumber"}
            id={"phoneNumber"}
          ></Input>
        </div>
        <Checkbox
          label={"Acepto términos y condiciones"}
          id={"tyc"}
          name={"tyc"}
        />
        <Checkbox
          label={"Quiero suscribirme al newsletter"}
          id={"newsletter"}
          name={"newsletter"}
        />
        <Button type={"submit"} variant={"primary"}>
          Aceptar
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
