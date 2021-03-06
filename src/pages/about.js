import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import styles from "./about.module.css"
import User from "../components/user"
console.log(styles);

export default () => (
  <Layout>
    <Header headerText="About Gatsby"/>
    <p>Such wow. Very React.</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Layout>
)