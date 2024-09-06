
import AboutImg from "../imgs/about-img.jpg"

function Aboutmain(){
        return(
                <>
                <section className="about-section">
                        <div class="container">
                                <div class="row">
                                        <div class="one col-md-5">
                                                <img src={AboutImg} alt="sushi img"/>
                                        </div>
                                        <div class="two col-md-7">
                                                <h3>Nestled in the heart of the city, Lemon Shrimp serves as a beacon for sushi enthusiasts. Drawing inspiration from ancient Japanese traditions, our establishment marries the art of sushi-making with contemporary culinary techniques.
At Lemon Shrimp, every grain of rice tells a story, and every slice of fish sings a song. Our dedicated chefs, with years of experience under their belts, craft each dish meticulously, ensuring an unparalleled gastronomic journey for our patrons.
Dine with us to experience not just food, but an intimate dance of flavors, textures, and culture. Welcome to Lemon Shrimp — where tradition meets modernity and every bite is a testament to our passion.
                                                </h3>
                                        </div>
                                </div>
                        </div>
                </section>
                </>
        )
}

export default Aboutmain;