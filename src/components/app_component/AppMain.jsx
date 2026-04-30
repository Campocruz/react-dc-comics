import AppCard from "../main_component/AppCard";
import AppWelcomeAzzurra from "../main_component/AppWelcomeAzzurra";

export default function AppMain() {

  return (
    <div className="container">
      <AppWelcomeAzzurra name="Azzurra" />
      <AppCard src={"null"} alt={"null"} title={"ciao"} />
    </div>
  )
}