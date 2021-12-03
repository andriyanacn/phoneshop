import {Row, Col} from 'react-bootstrap';
import apple from '../Assets/Logo/apple.png';
import infinix from '../Assets/Logo/infinix.png';
import samsung from '../Assets/Logo/samsung.png';
import sony from '../Assets/Logo/sony.png';
import oppo from '../Assets/Logo/oppo.png';
import vivo from '../Assets/Logo/vivo.png';
import mi from '../Assets/Logo/mi.png';
import nokia from '../Assets/Logo/nokia.png';


export default function RowProducts(){
    return(
    <Row xl='auto' style={{padding:'20px', position:'center', marginLeft:'15%'}}>
              <Col><img alt="" src={oppo} height="30px" /><span href="" ></span></Col>
              <Col><img alt="" src={vivo} height="30px" /><span href="" ></span></Col>
              <Col><img alt="" src={mi} height="30px" /><span href="" ></span></Col>
              <Col><img alt="" src={infinix} height="30px" /><span href="" ></span></Col>
              <Col><img alt="" src={samsung} height="30px" /><span href="" ></span></Col>
              <Col><img alt="" src={sony} height="30px" /><span href="" ></span></Col>
              <Col><img alt="" src={apple} height="30px" /><span href="" ></span></Col>
              <Col><img alt="" src={nokia} height="30px" /><span href="" ></span></Col>
    </Row>   

    )
}