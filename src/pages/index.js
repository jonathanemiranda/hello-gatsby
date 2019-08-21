import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Project from "../components/project"

export default () => (
  <Layout>
    <div style={{ color: `purple`}}>
      <Header headerText="Hello and thanks for visiting"/>
      <p>My name is Jonathan and I'm a front-end developer based in Richmond, VA. I'm currently looking for an opportunity at a small to midsize company in Richmond, Denver, or Seattle. </p>
      <img src="/img/Jonathan-Miranda-519.jpg" alt="" />
    </div>
    <Project/>
  </Layout>
)