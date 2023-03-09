async function productSelection(obj) {
  console.log(obj);
  return obj;
}

export async function action({ request }) {
  const formData = Object.fromEntries(await request.formData());

  const { color, size, amount } = formData;

  const errors = {};

  if (color === undefined) {
    errors.color = "Debes seleccionar un color.";
  }

  if (size === undefined) {
    errors.size = "Debes seleccionar un talle.";
  }

  if (amount === "") {
    errors.amount = "Debes seleccionar la cantidad";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  await productSelection({ color, size, amount });
  return null;
}
