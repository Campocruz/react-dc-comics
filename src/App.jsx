import AppFooter from "./components/AppFooter";
import AppHeater from "./components/AppHeater";
import AppMain from "./components/AppMain";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function App() {

  return (
    <>
      <div id="appHeader" className="container-flush">
        <AppHeater />
      </div>
      <div id="appMain" className="container">
        <AppMain />
      </div>
      <div id="appFooter" className="container-flush">
        <AppFooter />
      </div>
    </>
  )
}
