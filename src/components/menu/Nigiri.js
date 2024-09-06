import Card from "./Card";
import i9 from "../../imgs/nigiri/nigiri-shimp.png"
import i10 from "../../imgs/nigiri/nigiri-tuna.png"
import Menubanner from "../banner/Menubanner";

function Nigiri(){
        return(
                <>
                <Menubanner title="Nigiri" />
                <div class="container text-center">
                        <div class="row">
                                <div class="col-sm-4">
                                        <Card  img={i9} title="Nigiri Shrimp" price="60" des="rice, Ebi shrimp, Philadelphia, nori" />
                                </div>
                                <div class="col-sm-4">
                                        <Card img={i10} title="Nigiri Tuna" price="55" des="rice, tuna, tobiko wasabi" />
                                </div>
                        </div>
                </div>
                </>
        )
}

export default Nigiri;