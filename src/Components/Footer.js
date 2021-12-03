import { Card, Row, Col } from "react-bootstrap";
import './footer.css';
import fb from '../Assets/fb.png';
import twitter from '../Assets/twitter.png';
import ig from '../Assets/ig.png';
import mail from '../Assets/mail.png'
import tiktok from '../Assets/tiktok.png';
import wa from '../Assets/wa.png';

export default function Footer(){
    return (<div>
      <Card className="footer">  
        <Row>
          <Col sm>
              <iframe src="https://www.google.com/maps/@-7.5409477,110.8803928,20z" ></iframe>
          </Col>
          <Col sm>
              <h3>Find Us</h3>
              <p>Jl Amarta Raya, Pulosari RT 06, RW 06<br/>Sroyo, Jaten, Karanganyar</p>
              <p>57771</p>          
          </Col>
          <Col sm><h3>Contact Us</h3>
            <Row xs={2}>
              <Col>
                  <img alt="" src={wa} width="17px" /><span href="facebook.com" >   facebook</span><br/>
                  <img alt="" src={mail} width="17px" /><span href="facebook.com" >   email.com</span><br/>
                  <img alt="" src={fb} width="17px" /><span href="facebook.com" >   facebook.com</span><br/>
              </Col>
              <Col>
                  <img alt="" src={twitter} width="17px" /><span href="facebook.com" >   twitter.com</span><br/>
                  <img alt="" src={ig} width="17px" /><span href="facebook.com" >   instagram.com</span><br/>
                  <img alt="" src={tiktok} width="17px" /><span href="facebook.com" >   tiktok.com</span><br/>
              </Col>
            </Row>              
          </Col>
        </Row>
      </Card>
    </div>
 
    )
}
