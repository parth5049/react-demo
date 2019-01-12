import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export default function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper blue darken-1">
        <div className="container">
          <Link to="/" className="brand-logo" >Cool Project</Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    </div>
  )
}
