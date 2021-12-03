import { Col, Row, Card, Container } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from 'react-router-dom';


export default function Articles(){
    //const dateTime= new Date().toLocaleTimeString()
    const [listProduk] = useState([
        {
          id:1,
          title: "Infinix Hot 10",
         // date:{dateTime},
          gambar:"https://p-id.ipricegroup.com/uploaded_41a1745e82ff082c61b670fccc99d552.jpg",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas velit libero, at faucibus augue rhoncus nec. In fringilla velit et nulla dignissim convallis. Curabitur sed sapien non tortor auctor ornare. Quisque nisl erat, imperdiet dictum sem ut, faucibus suscipit nisl. Fusce non ultricies lectus. Nulla eu pellentesque elit. Etiam sed lacus a neque finibus pellentesque. Sed eget congue elit, non porttitor lectus. Praesent suscipit dolor at diam interdum, non porttitor nunc scelerisque. In tincidunt, mi at viverra pharetra, urna est imperdiet orci, vitae rutrum diam nisi a lacus. Quisque sit amet quam finibus, faucibus lectus eu, accumsan nulla. Nulla vel neque a magna euismod eleifend ac vitae tortor. Cras consectetur leo libero, quis tempus nisl porttitor sit amet. Curabitur dolor risus, hendrerit et scelerisque ac, tincidunt in est."
        },
        {
            id:2,
            title: "Infinix Hot 10",
            //date:{dateTime},
            gambar:"https://p-id.ipricegroup.com/uploaded_41a1745e82ff082c61b670fccc99d552.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas velit libero, at faucibus augue rhoncus nec. In fringilla velit et nulla dignissim convallis. Curabitur sed sapien non tortor auctor ornare. Quisque nisl erat, imperdiet dictum sem ut, faucibus suscipit nisl. Fusce non ultricies lectus. Nulla eu pellentesque elit. Etiam sed lacus a neque finibus pellentesque. Sed eget congue elit, non porttitor lectus. Praesent suscipit dolor at diam interdum, non porttitor nunc scelerisque. In tincidunt, mi at viverra pharetra, urna est imperdiet orci, vitae rutrum diam nisi a lacus. Quisque sit amet quam finibus, faucibus lectus eu, accumsan nulla. Nulla vel neque a magna euismod eleifend ac vitae tortor. Cras consectetur leo libero, quis tempus nisl porttitor sit amet. Curabitur dolor risus, hendrerit et scelerisque ac, tincidunt in est."
        },
      ]
    )

    //const {id, nama, harga, gambar, handler} = props
    return(<div >
            <h1 style={{padding :"20px"}}><center>ARTICLES</center></h1>
            <Container style={{border:"2px solid black"}}>
                {listProduk.map((data)=>{
                    return(
                        <Row>
                            <Col sm={4} >
                                <Card.Img variant="top" width="150" src={data.gambar}  />
                            </Col>
                            <Col sm={8}>
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text> 
                                        {/* {data.date}<br/> */}
                                        {data.details}                   
                                    </Card.Text>
                                        <Link to="/carts" style={{color:"yellow"}}>Read More</Link>
                                </Card.Body>
                            </Col>
                        </Row>
                    )
                })}                              
            </Container>
        
                       
    </div>
           
    )
}

  
