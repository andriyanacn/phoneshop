import {useState} from 'react'

// import Navi from '../Components/Navbar';
import Products from './products';
import Carts from './cart';
import { Row,Container,Col,ListGroup } from 'react-bootstrap';
import { gql, useQuery, useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
// import LoadingSvg from "./LoadingSvg";
// //import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

export const QUERY = gql`
  query cart {
    cart {
      id
      nama
      quantity
      harga      
    }
  }
`;


function App() {
  const [listCart, setlistCart] = useState([])
  const [search, setSearch] = useState("")

  const listProduk =[
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
        gambar:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note10--.jpg"
      },
    
  ]



const handleAddCart=(e)=>{
    const {id} = e.target

    // ==  comparasi nilai saja
    // === comparasi nilai dan type data
    const hasil = listProduk.find(element => element.id === parseInt(id));

    // Check existing cart
    const checkID = listCart.find(element => element.id === parseInt(id));

    if(checkID===undefined){
      setlistCart([...listCart, {...hasil,jumlah:1}])
    }else{   
      const newListCart = listCart.map((cart)=>{
        if(checkID.id===cart.id){
          cart.jumlah=cart.jumlah+1
          return cart
        }else{
          return cart
        }
      })
      setlistCart(newListCart)
    }
  }

  const handleKurangi=(e)=>{
    const {id} = e.target

    // Find jumlah produk saat ini
    const productInCart = listCart.find(element => element.id === parseInt(id));

    if(productInCart.jumlah ===1){
      const hasil = listCart.filter((product)=>{
        if(product.id !== parseInt(id)){
          return true
        }else{
          return false
        }
      })
      setlistCart(hasil)
    }else{
      const newListCart = listCart.map((cart)=>{
        if(parseInt(id)===cart.id){
          cart.jumlah=cart.jumlah-1
          return cart
        }else{
          return cart
        }
      })
  
      setlistCart(newListCart)
    }
  }

  const handleSearch =(e)=>{
    const value = e.target.value
    setSearch(value)
  }

  console.log("State list cart", listCart)

  const totalHarga = listCart.reduce((prev,current)=>{
    const total=current.jumlah*current.harga
    return prev+total
  },0)

  const totalDiskon = listCart.reduce((prev,current)=>{
    let total = 0
      // Jika jumlah lebih dari 2 dia mendapatkan diskon 10%, rumusnya harga*jumlah*0.9
      if(current.jumlah>2){
        total = current.harga*current.jumlah*0.9
      }else{
        total=current.jumlah*current.harga
      }
      return prev+total
  },0)
  
  return (
    <div className="App">
      {/* <Navi handler={handleSearch}/> */}
      <Container >
        <Row>
          <Col>
            <Row>
            {search?
            listProduk.filter((produk)=>{
              if(produk.nama.toLowerCase().includes(search.toLowerCase())){
                return true
              }else{
                return false
              }
            }).map((produk)=>{
              return <Products id={produk.id} nama={produk.nama} harga={produk.harga} gambar={produk.gambar} handler={handleAddCart}/>
            })
            :
            listProduk.map((produk)=>{
              return <Products id={produk.id} nama={produk.nama} harga={produk.harga} gambar={produk.gambar} handler={handleAddCart}/>
            })}
            </Row>
          </Col>
          <Row>
          <Col xs={4}>
          <ListGroup style={{position:'relative'}}><h1><center>Total Harga</center></h1>
            {listCart.map((produk)=>{
              return <Carts id={produk.id} nama={produk.nama} harga={produk.harga} jumlah={produk.jumlah} handler={handleKurangi}/>
            })}
            <ListGroup.Item>
              <Row className="justify-content-md-center">
                <Col>
                Total : {totalHarga === totalDiskon ? <span>Rp. {totalHarga}</span>:<span style={{textDecoration:"line-through"}}>Rp. {totalHarga}</span>}
                </Col>
                <Col xs={6}>
                  QTY : {listCart.reduce((prev,current)=>{
                    const jumlah = current.jumlah
                    return prev + jumlah
                  },0)}
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  {totalHarga !== totalDiskon ? <span>Diskon : Rp. {totalDiskon} </span>: null}
                </Col>
              </Row>
              <br/><br/><br/>
              {/* <ListGroup.Item>
                Untuk pembelian 3 pieces produk yang sama, akan mendapat diskon 10%.
              </ListGroup.Item> */}
            </ListGroup.Item>
          </ListGroup>
          </Col>
        </Row>
          </Row>
         
        </Container>
    </div>
  );
}

export default App;