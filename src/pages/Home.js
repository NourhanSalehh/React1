import Aboutmain from "../components/AboutMain";
import Contactmain from "../components/contact/ContactMain";
import MenuMain from "../components/MenuMain";
import Slider from "../components/slider/Slider";
import "./home.css"

function Home(){
        return(
                <> 
                <Slider />
                <div className="home-d"></div>
                        <MenuMain />
                        <Aboutmain />
                <div className="home-d"></div>
                        <Contactmain />
                </>
        )
}
export default Home;