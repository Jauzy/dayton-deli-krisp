import React from "react"

import { Navbar, Parallax, Quotes } from '../Components/Index'
import { Products, Footer, VisionMission } from '../Containers/Index'

export default function Home() {
  return (
    <div className="font-playfair">
      <Navbar />
      <Parallax />
      <Products />
      <Quotes />
      <VisionMission />
      <Footer />
    </div>
  )
}