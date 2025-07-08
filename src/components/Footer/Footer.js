import React from "react"
import FooterAboutUs from "./FooterAboutUs"
import FooterRecentBlog from "./FooterRecentBlog"
import FooterServices from "./FooterServices"
import FooterContacts from "./FooterContacts"
import FooterBottomText from "./FooterBottomText"

function Footer() {
  return (
    <footer className="footer">
      <div className="mainContainer">
        <div className="row row-gap-5">
          <FooterAboutUs />
          <FooterRecentBlog />
          <FooterServices />
          <FooterContacts />
          <FooterBottomText />
        </div>
      </div>
    </footer>
  )
}

export default Footer
