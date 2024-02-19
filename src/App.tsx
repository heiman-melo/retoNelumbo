import { AppRouterProvider } from "../src/routes/Routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import { Footer } from "antd/es/layout/layout";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <BrowserRouter basename="/">
          <AppRouterProvider />
        </BrowserRouter>
      </div>
      <Footer className="footer">Portal de Garantías MACROPAY</Footer>
    </>
  );
}

export default App;
