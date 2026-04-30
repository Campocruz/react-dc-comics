import AppWelcomeAzzurra from "../main_component/AppWelcomeAzzurra";
import comics from '../../assets/data/comics'
import ContainerCard from "../main_component/ContainerCard";

export default function AppMain() {

  return (
    <div className="container">
      <AppWelcomeAzzurra name="Azzurra" />
      <ContainerCard comics={comics} />
    </div>
  )
}