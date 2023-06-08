import React from 'react'
import footer from './Footer.module.css'

const Footer = ({txt}) => {
  return (
    <footer>
        <div className="container">
            <p>&copy; {txt}</p>
        </div>
    </footer>
  )
}

export default Footer