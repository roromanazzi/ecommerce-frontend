import "./App.css";
import { Login } from "./components/Forms/Login/Login";
import { ProductSelection } from "./components/Forms/ProductSelection/ProductSelection";
import Button from "./components/UI/Button";
import Checkbox from "./components/UI/Checkbox";
import Input from "./components/UI/Input";
import { PageTitle } from "./components/UI/PageTitle";
import RadioInput from "./components/UI/RadioInput";
import LoginPage from "./pages/Login";
import { ProductDetailPage } from "./pages/ProductDetail";

function App() {
  return (
    <ProductDetailPage />
    // <>
    //
    // <PageTitle
    //     title={"Seawolf colection"}
    //     leftSubtitle={"AW 2023"}
    //     rightSubtitle={"Pepito Perez"}
    //   />
    //   <Checkbox
    //     label={"Acepto términos y condiciones"}
    //     id={"tyc"}
    //     name={"tyc"}
    //   ></Checkbox>
    //   <Checkbox
    //     label={"Quiero suscribirme al newsletter"}
    //     id={"S"}
    //     name={"S"}
    //   ></Checkbox>
    //   <br></br>
    //   <Button variant={"primary"}>Agregar al carrito</Button>
    //   <Button variant={"primary"}>Confirmar</Button>
    //   <Button variant={"primary"}>Comprar</Button>
    //   <Button variant={"secondary"}>Seguir comprando</Button>
    //   <Button variant={"secondary"}>Ir al inicio</Button>
    //   <Button variant={"secondary"}>Volver</Button>
    //   <br />
    //   <br />
    //   <Input variant={"longInput"} label={"Nombre"}></Input>
    //   <br />
    //   <br />

    //   <Input variant={"shortInput"} label={"CP"}></Input>
    //   <br />
    //   <br />

    //   <Input variant={"noLabelInput"} placeholder={"Cantidad"}></Input>
    //   <br />
    //   <br />

    //   <Input variant={"rowInput"} label={"Cod. de descuento"}></Input>
    //   <br />
    //   <br />

    //   <Login />
    //   <br />
    //   <br />
    //   <ProductSelection />
    // </>
  );
}

export default App;
