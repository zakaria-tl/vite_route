import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <p>Home</p>
      <Link to="/about" >Go to about</Link>
    </main>
  )
}
