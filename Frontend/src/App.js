import CarouselBanner from "./Components/Dashboard/CarouselBanner";
import CarouselBannerOpen from "./Components/Dashboard/CarouselBannerOpen";
import LoggedInNavbar from "./Components/LoggedInNavbar";
import {Router} from "./Routes/Routes"

function App() {
  return (
    <div>
    <CarouselBanner/>     
    <Router/>
    </div>
  );
}

export default App;
