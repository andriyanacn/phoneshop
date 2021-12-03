import React from 'react';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render  } from 'react-dom';
import Routing from './routing';
import { BrowserRouter } from 'react-router-dom';


render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Navbar />
  // </React.StrictMode>
  <React.StrictMode>
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
  </React.StrictMode>
 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
