import { Route,Routes }from "react-router-dom";
import './App.css'
import Navbars from "./components/navbar/Navbars";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About"
import Uramaki from "./components/menu/Uramaki";
import Menu from "./pages/Menu";
import Hosomaki from "./components/menu/Hosomaki"
import Nigiri from "./components/menu/Nigiri"
import Ramen from "./components/menu/Ramen"
import Deserts from "./components/menu/Deserts"

function App() {
  return (
        <>
        <div className="App">
          <Navbars />
          <Routes>
            <Route  index path="/" element={<Home />} />
            <Route path='contact' element= {<Contact />} />
            <Route path='about' element= {<About />} />
            <Route path='menu' element= {<Menu />} />
            <Route path='uramaki' element= {<Uramaki />} />
            <Route path='hosomaki' element= {<Hosomaki />} />
            <Route path='nigiri' element= {<Nigiri />} />
            <Route path='ramen' element= {<Ramen />} />
            <Route path='deserts' element= {<Deserts />} />
          </Routes>
          <Footer />
      </div>
      </>
  );
}

export default App;
