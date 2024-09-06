import "./menu.css";
import Uramaki from "../components/menu/Uramaki";
import Nigiri from "../components/menu/Nigiri";
import Hosomaki from "../components/menu/Hosomaki";
import Ramen from "../components/menu/Ramen";
import Deserts from "../components/menu/Deserts";
import Banner from "../components/banner/Banner"

function Menu(){
        return(
                <>
                <Banner title="menu" smtitle="menu"/>
                <Uramaki />
                <Nigiri />
                <Hosomaki />
                <Ramen />
                <Deserts />
                </>
        )
}
export default Menu;