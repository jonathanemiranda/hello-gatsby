import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Project from "../components/project"
import Footer from "../components/footer"

export default () => (
  <Layout>
    <div style={{ }}>
      <Header headerText="Hello and thanks for visiting"/>
      <div style={{backgroundImage: `url('/img/jonathan.jpg')`, backgroundPositionY:`20%`, backgroundSize: `cover`,  height: `400px`, display: `flex`, flexDirection: `row-reverse`}}>
        <div style={{background: `linear-gradient(270deg, #002740, #00274000)`, display: `flex`, alignItems: `flex-end`}}>
          <p style={{color: `#fff`, width: `200px`}}> My name is Jonathan and I'm a front-end developer based in Richmond, VA. I'm currently looking for an opportunity in Richmond, Denver, or Seattle. </p>
        </div>  
      </div>
    </div>
    <Project/>
  </Layout>
)