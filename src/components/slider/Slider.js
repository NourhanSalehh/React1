import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../imgs//slider1.avif"
import slider2 from "../../imgs/slider2.jpg"
import slider3 from "../../imgs/slider3.jpg"

function Slider(){
        return(
        <>
        <Carousel data-bs-theme="slider light">
                <Carousel.Item>
                        <img className=" photo d-block w-100 h-50" src={slider1} alt="First slide"/>
                        <Carousel.Caption>
                                <h1>Lemon Shrimp</h1>
                                <h2>Traditional Japanese Sushi Restaurant</h2>
                                <h3>Taste the authentic flavours of Japan at Lemon Shrimp. We offer a wide variety of sushi options, each made with care and tradition. Perfect for those new to sushi or seasoned enthusiasts. Dive into a world of delicious taste and discover something new with every bite.</h3>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img className="photo d-block w-100 h-50" src={slider2} alt="Second slide"/>
                        <Carousel.Caption>
                                <h1>Lemon Shrimp</h1>
                                <h2>Traditional Japanese Sushi Restaurant</h2>
                                <h3>Taste the authentic flavours of Japan at Lemon Shrimp. We offer a wide variety of sushi options, each made with care and tradition. Perfect for those new to sushi or seasoned enthusiasts. Dive into a world of delicious taste and discover something new with every bite.</h3>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img className="photo d-block w-100 h-50" src={slider3} alt="Third slide"/>
                        <Carousel.Caption>
                                <h1>Lemon Shrimp</h1>
                                <h2>Traditional Japanese Sushi Restaurant</h2>
                                <h3>Taste the authentic flavours of Japan at Lemon Shrimp. We offer a wide variety of sushi options, each made with care and tradition. Perfect for those new to sushi or seasoned enthusiasts. Dive into a world of delicious taste and discover something new with every bite.</h3>
                        </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        </>
        )
}

export default Slider;