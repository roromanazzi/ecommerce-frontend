import "./App.css";
import Header from "./components/Header";
import { PageTitle } from "./components/UI/PageTitle";
import { AboutPage } from "./pages/About";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <Header />
      <PageTitle title={"Registrate"} />
      <Signup />
    </>
  );
}

export default App;
