import { Featured } from "./Components/Featured";
import "./styles.css";
import "react-multi-carousel/lib/styles.css";
import { HowItWorks } from "./Components/HowItWorks";
import { WhyRevv } from "./Components/WhyRevv";
import { Sanitized } from "./Components/Sanitized";
import {Router} from "./Routes/Routes"
import LoggedInNavbar from "./Components/LoggedInNavbar";

export default function App() {

  return (
    <div className="App">
        <Router/>
      <LoggedInNavbar/>
      <Sanitized />
      <Featured />
      <HowItWorks />
      <WhyRevv />
    </div>
       );
}
