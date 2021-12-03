import { Carousel } from "react-bootstrap";

export default function Caro(){
   return(
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://static.vecteezy.com/system/resources/previews/000/523/535/non_2x/5g-internet-technology-background-next-generation-of-mobile-network-and-digital-data-connected-with-smartphone-on-blue-background-vector.jpg"
        alt="First slide"
        height="550px"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://securecdn.pymnts.com/wp-content/uploads/2016/10/hackers-love-iot-1000x600.jpg"
        alt="Second slide"
        height="550px"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://soyacincau.com/wp-content/uploads/2021/08/210818-redmi-10-5-1024x576.jpg"
        alt="Third slide"
        height="550px"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
   )
}

