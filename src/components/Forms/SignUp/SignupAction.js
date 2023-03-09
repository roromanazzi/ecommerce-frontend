import { redirect } from "react-router-dom";

async function signup(obj) {
  return obj;
}

export async function action({ request }) {
  const formData = Object.fromEntries(await request.formData());
  const errors = {};

  const { firstName, lastName, email, password, comparePassword, tyc } =
    formData;

  if (typeof password !== "string" || password.length < 7) {
    errors.password = "La contraseña debe tener al menos 8 caracteres.";
  }

  if (password !== comparePassword) {
    errors.password = "Las contraseñas no coinciden.";
  }

  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "Ingrese un email válido";
  }

  if (typeof firstName !== "string" || typeof lastName !== "string") {
    errors.name = "Ingrese un nombre válido.";
  }

  if (tyc !== "on") {
    errors.tyc = "Debes aceptar términos y condiciones";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  await signup({ firstName, lastName, email, password, tyc });
  return redirect("/");
}
