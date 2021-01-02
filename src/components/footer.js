import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Social from "./social"

const Footer = () => (
   <footer style={{
      marginTop: `2rem`,
      background: `black`,
      marginBottom: `1.45rem`,
      color: `white`,
       textDecoration: `none`,
     
    }}
  >


     
    <div className="text-center"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      
      <Social />
          © {new Date().getFullYear()},
  
            <Link
          to="/"
          style={{
            color: `white`,
             textDecoration: `none`,
            
          }}
        >Estia städ AB
        </Link>.All Rights Reserved
    </div>
    
        </footer>
       

)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
