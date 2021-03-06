import React from "react";
import layoutStyles from "./layout.module.css";
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}> 
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default ({children}) => (
    <div className={layoutStyles.layout}>
        <header style={{ marginBottom: `1.5rem`, backgroundColor: `#0E5C8C` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Jonathan's Site</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
        {children}
    </div>
)