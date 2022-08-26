
import InnerNav from "./Components/InnerNavbar/InnerNav";

import Homepage from "./Pages/Homepage";
import MainRoutes from "./Pages/MainRoutes";

import Slide from "./Components/Thingd_to_do/Slide";


import Things from "./Components/Thingd_to_do/Things";
function App() {
  return (
    <div className="App">


      
      <InnerNav />
      <MainRoutes/>

    
    <Things />

    </div>

  );
}

export default App;
