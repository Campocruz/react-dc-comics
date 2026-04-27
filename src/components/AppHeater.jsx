import AppHeaterNavbar from "./AppHeaterNavbar";
import AppLogo from "./AppLogo";

const list = [
  "charaters",
  "comics",
  "movies",
  "tv",
  "games",
  "collectibles",
  "videos",
  "fans",
  "news",
  "shop"
];

export default function AppHeater() {

  return (
    <>
      <div className="row">
        <div className="col">
          <AppLogo />
        </div>
        <div className="col">
          <AppHeaterNavbar list={list} />
        </div>
      </div>
    </>

  )
}