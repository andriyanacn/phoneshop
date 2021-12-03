import Caro from "../Components/Carousel";
import Products from "./products1";
import { Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <div><Caro /></div>
            <div><Products /></div>
            <Card>
                <Card.Body style={{position:'relative', border:'none'}}>
                <Button><Link to="/products" style={{ textDecoration: 'none', color:'white', paddingBottom:'30px' }}><center>View More</center></Link></Button>
                </Card.Body>
            </Card>
            
        </div>
    )
}