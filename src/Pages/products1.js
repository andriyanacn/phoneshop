import { Col, Row, Card, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Products(){
    const [listProduk] = useState([
        {
          id:1,
          nama: "Infinix Hot 10",
          harga:1500000,
          gambar:"https://p-id.ipricegroup.com/uploaded_41a1745e82ff082c61b670fccc99d552.jpg"
        },
        {
          id:2,
          nama: "Oppo Reno 6",
          harga:45000,
          gambar:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/14/ddf5236d-57e2-4017-b213-908e247803fb.jpg"
        },
        {
          id:3,
          nama: "Samsung S20 Ultra",
          harga:2000000,
          gambar:"https://p-id.ipricegroup.com/uploaded_f28549b6dae354df30cf2c7bc48c6efa.jpg"
        },
        {
            id:4,
            nama: "Redmi Note 10S",
            harga:2700000,
            gambar:"https://p-id.ipricegroup.com/uploaded_f28549b6dae354df30cf2c7bc48c6efa.jpg"
          },
          {
            id:5,
            nama: "Infinix Hot 10",
            harga:1500000,
            gambar:"https://p-id.ipricegroup.com/uploaded_41a1745e82ff082c61b670fccc99d552.jpg"
          },
          {
            id:6,
            nama: "Oppo Reno 6",
            harga:45000,
            gambar:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/14/ddf5236d-57e2-4017-b213-908e247803fb.jpg"
          },
          {
            id:7,
            nama: "Samsung S20 Ultra",
            harga:2000000,
            gambar:"https://p-id.ipricegroup.com/uploaded_f28549b6dae354df30cf2c7bc48c6efa.jpg"
          },
          {
              id:8,
              nama: "Redmi Note 10S",
              harga:2700000,
              gambar:"https://p-id.ipricegroup.com/uploaded_f28549b6dae354df30cf2c7bc48c6efa.jpg"
            },
          
      ]
    )

    //const {id, nama, harga, gambar, handler} = props
    return(<div style={{margin:'50px'}}>
        <Row>
        {
            listProduk.map((data)=>{
            return(
                <Col xs={3}>
                <Card style={{ margin: '5px'}}>
                    <Card.Img variant="top" height="270" width="100" src={data.gambar} />
                    <Card.Body>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Text>                    
                        {data.harga}
                        </Card.Text>
                        <Button><Link to="/carts" style={{color:"yellow"}}>Cart</Link></Button>
                    </Card.Body>
                </Card>
                </Col>
            )})
             
        }     
        </Row>                       
    </div>
           
    )
}

  
