import {Form, Row,Button,Container,Col} from 'react-bootstrap'
import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import signUp from './sign_up'

export default function Login(){
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [errorEmail,setErrorEmail] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleUsername = (e) => {
        const value = e.target.value
        setusername(value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(username).toLowerCase())){
            setErrorEmail(false)
        }else{
            setErrorEmail(true)
        }

    }

    const handleSubmit = (e)=>{
        if(username === "admin@gmail.com" && password === "admin"){
           setisLoggedIn(true)
        }else{
            alert("wrong password")
        }
        e.preventDefault()
    }

    // Klo username === admin@gmail.com & password === admin maka dia redirect ke aplikasi /app
    if(isLoggedIn){
        return <Navigate to="/app" />
    }else{
        return(
            <Container style={{paddingTop:"50px", paddingBottom:'70px', width:"700px, background-color:grey"}}>
                
                <Row className="justify-content-md-center">
                    <Col xs md={5} style={{border:'1px solid red', padding:'30px'}}><h2><center>Login</center></h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={handleUsername} />
                            <Form.Text className="text-muted">
                            {errorEmail?<span>Invalid Email.</span>:<span>We'll never share your email with anyone else.</span>}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{float:'left', color:'white'}}><Link to="/home" style={{ textDecoration: 'none', color:'black' }}>Login</Link> 
                        </Button>
                        {/* <Button variant="primary" type="submit" style={{float:'right'}}><Link href="./sign_up.js" style={{ textDecoration: 'none', color:'black' }}>Register</Link>
                        </Button> */}
                    </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
