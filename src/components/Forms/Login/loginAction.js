import { redirect } from "react-router-dom";

async function login(obj) {
  return obj;
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const errors = {};

  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "Ingrese un e-mail válido.";
  }

  if (typeof password !== "string" || password.length < 7) {
    errors.password = "La contraseña debe tener al menos 8 caracteres.";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  await login({ email, password });
  return redirect("/");
}
