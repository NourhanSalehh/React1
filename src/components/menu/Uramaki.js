import Card from "./Card";
import i1 from "../../imgs/uramaki/dragon-roll.png"
import i2 from "../../imgs/uramaki/inari-shrimp-roll.png"
import i3 from "../../imgs/uramaki/kalifonia-roll.png"
import i4 from "../../imgs/uramaki/ocean-roll.png"
import i5 from "../../imgs/uramaki/paradise-roll.png"
import i6 from "../../imgs/uramaki/sagano-roll.png"
import i7 from "../../imgs/uramaki/philadelphia-roll.png"
import i8 from "../../imgs/uramaki/sweet-viggie.png"
import Menubanner from "../banner/Menubanner";

function Uramaki(){
        return(
                <>
                <Menubanner title="Uramaki" />
                <div class="container text-center">
                        <div class="row">
                                <div class="col-sm-4">
                                        <Card  img={i1} title="Dragon roll" price="55" des="rice, nori, Philadelphia, crab rolls, salmon, cucumber, dragon sauce, Yakata mayonnaise, unagi sauce, kimchi sesame" />
                                </div>
                                <div class="col-sm-4">
                                        <Card img={i2} title="Inari Shrimp" price="50" des="rice, nori, Philadelphia, shrimp, cucumber, tobiko" />
                                </div>
                                <div class="col-sm-4">
                                        <Card img={i3} title="Kalifonia roll" price="75" des="rice, nori, Philadelphia, salmon, cucumber, tobiko" />
                                </div>
                                <div class="col-sm-4">
                                        <Card img={i4} title="Ocean roll" price="50" des="rice, nori, Philadelphia, tuna fish,salmon, cucumber, avocado, shrimp,sriracha chili souce" />
                                </div>
                                <div class="col-sm-4">
                                        <Card  img={i5} title="Paradise roll" price="70" des="rice, nori, smoked salmon, cucumber, avocado, crab mousse, yakata mayonnaise, dragon sauce, unagi sauce"/>
                                </div>
                                <div class="col-sm-4">
                                        <Card img={i6} title="Sagano roll" price="50" des="nori, Philadelphia,smoked salmon cucumber, avocado"/>
                                </div>
                                <div class="col-sm-4">
                                        <Card img={i7} title="Philadelphia roll" price="60" des="rice, nori, Philadelphia,smoked salmon,cucumber, sesame "/>
                                </div>
                                <div class="col-sm-4">
                                        <Card img={i8} title="Sweet Viggie" price="50" des="rice, nori, Philadelphia, mango, avocado, unagi sauce, sweet"/>
                                </div>
                        </div>
                </div>
                </>
        )
}

export default Uramaki;