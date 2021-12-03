import { Container,  Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Aboutus() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: '#FAEBD7',
          paddingTop: "20px",
          textAlign: "center",
          height: "250px",
        }}
      >
        
        <br />
        <h2>About Us</h2>
        <Row>
            <br /><hr/>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>            
            <hr />
          
        </Row>
        
      </Container>
     </>
  );
}

