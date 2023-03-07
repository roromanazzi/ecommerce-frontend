import { redirect } from "react-router-dom";

async function signup(obj) {
  return console.log(obj);
}

export async function action({ request }) {
  const { firstName, lastName, email, password, comparePassword } =
    Object.entries(await request.formData());
  const errors = {};

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

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  await signup({ firstName, lastName, email, password });
  return redirect("/");
}
