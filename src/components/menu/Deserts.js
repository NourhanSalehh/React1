import Card from "./Card";
import i18 from "../../imgs/deserts/matcha-cake.png"
import i19 from "../../imgs/deserts/lychie-cheesecake.png"
import i20 from "../../imgs/deserts/choko-cake.png"
import Menubanner from "../banner/Menubanner";

function Deserts(){
        return(
                <>
                <Menubanner title="Deserts" />
                <div class="container text-center">
                        <div class="row">
                                <div class=" col-sm-4">
                                        <Card  img={i18} title="Matcha Cake" price="80" des="matcha, eggs, flour, mascarpone" />
                                </div>
                                <div class=" col-sm-4">
                                        <Card img={i19} title="Lychie cheesecake" price="70" des="mascarpone, cream, biscuits, butter, lychee, raspberry, rose" />
                                </div>
                                <div class=" col-sm-4">
                                        <Card img={i20} title="Choko cake" price="60" des="chocolate mousse, biscuits, cream, butter, chocolate pieces" />
                                </div>
                        </div>
                </div>
                </>
        )
}

export default Deserts;