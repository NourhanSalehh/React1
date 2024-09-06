import Card from "./Card";
import i16 from "../../imgs/ramen/chicken ramen.png"
import i17 from "../../imgs/ramen/shrimp ramen.png"
import Menubanner from "../banner/Menubanner";

function Ramen(){
        return(
                <>
                <Menubanner title="Ramen" />
                <div class="container text-center">
                        <div class="row">
                                <div class=" col-sm-4">
                                        <Card  img={i16} title="Chicken Ramen" price="65" des="ramen broth, chicken, egg, oodles, cabbage, onion, spinach, nori" />
                                </div>
                                <div class=" col-sm-4">
                                        <Card img={i17} title="Shrimp Ramen" price="75" des="shrimp, ramen broth, boiled egg, ramen noodles, green onion, spinach, nori" />
                                </div>
                        </div>
                </div>
                </>
        )
}

export default Ramen;