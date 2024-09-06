import Uramaki from "../components/menu/Uramaki";
import Nigiri from "../components/menu/Nigiri";
import Hosomaki from "../components/menu/Hosomaki";
import Ramen from "../components/menu/Ramen";
import Deserts from "../components/menu/Deserts";

function MenuMain(){
        return(
                <>
                <Uramaki />
                <Nigiri />
                <Hosomaki />
                <Ramen />
                <Deserts />
                </>
        )
}

export default MenuMain;