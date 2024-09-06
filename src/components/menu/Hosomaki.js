import Card from "./Card";
import i11 from "../../imgs/hosomaki/hoso-avocado.png"
import i12 from "../../imgs/hosomaki/hoso-kapa.png"
import i13 from "../../imgs/hosomaki/hoso-pinku.png"
import i14 from "../../imgs/hosomaki/hoso-sake.png"
import i15 from "../../imgs/hosomaki/hosol-tuna.png"
import Menubanner from "../banner/Menubanner";

function Hosomaki(){
        return(
                <>
                <Menubanner title="Hosomaki" />
                <div class="container text-center">
                        <div class="row">
                                <div class=" col-sm-4">
                                        <Card  img={i11} title="Hosomaki Avocado" price="90" des="rice, nori, Philadelphia, avocado" />
                                </div>
                                <div class=" col-sm-4">
                                        <Card img={i12} title="Hosomaki Kapa" price="80" des="rice, nori, Philadelphia, cucumber" />
                                </div>
                                <div class=" col-sm-4">
                                        <Card img={i13} title="Hosomaki Pinku" price="85"des="rice, pink soy nori, cucumber, Philadelphia, smoked salmon, unagi sauce" />
                                </div>
                                <div class=" col-sm-4">
                                        <Card img={i14} title="Hosomaki Sake"price="100" des="rice, nori, salmon" />
                                </div>
                                <div class=" col-sm-4">
                                        <Card  img={i15} title="Hosomaki Tuna"price="90" des="rice, nori, tuna"/>
                                </div>
                        </div>
                </div>
                </>
        )
}

export default Hosomaki;