import React from "react"

import { 
  Navbar, 
  Parallax, 
  Quotes, 
  Products, 
  Footer, 
  VisionMission,
  SubFooter,
} from '../Components/Index'

export default function Home() {
  return (
    <div className="font-playfair">
      <Navbar />
      <Parallax />
      <Products />
      <Quotes />
      <VisionMission />
      <SubFooter />
      <Footer />
    </div>
  )
}