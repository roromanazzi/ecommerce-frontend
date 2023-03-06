import "./App.css";
import Header from "./components/Header";
import { PageTitle } from "./components/UI/PageTitle";
import { AboutPage } from "./pages/About";
import { ProductDetailPage } from "./pages/ProductDetail";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      {/* <Header />
      <PageTitle title={"Registrate"} /> */}
      <ProductDetailPage />
    </>
  );
}

export default App;
