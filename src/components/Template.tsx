import React from "react"
import Header from "./Header"
import Footer from "./Footer"

function Template({ children }:any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Template
