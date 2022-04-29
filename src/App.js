import React from "react";
import './App.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import api from "./services/api";


function App() {


  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  )
}
export default App;