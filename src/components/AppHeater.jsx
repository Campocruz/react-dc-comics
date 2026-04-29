import AppHeaterNavbar from "./AppHeaterNavbar";
import AppLogo from "./AppLogo";
import heaterData from '../assets/data/appHeaderData.js'

export default function AppHeater() {

  return (
    <>
        <div className="row align-items-center bg-dark text-center">
          <div className="col-4">
            <AppLogo />
          </div>
          <div className="col-8">
            <AppHeaterNavbar links={heaterData} />
          </div>
        </div>
    </>

  )
}