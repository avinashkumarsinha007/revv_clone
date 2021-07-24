import { Featured } from "./Components/Featured";
import "./styles.css";
import "react-multi-carousel/lib/styles.css";
import { HowItWorks } from "./Components/HowItWorks";
import { WhyRevv } from "./Components/WhyRevv";
import { Sanitized } from "./Components/Sanitized";
export default function App() {
  return (
    <div className="App">
      <Sanitized />
      <Featured />
      <HowItWorks />
      <WhyRevv />
    </div>
  );
}
