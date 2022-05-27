import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Mikki Market <br /> Все права защищены</p>
      <p className="icons">
        <a href="https://instagram.com/mikki_nicki" target="_blank">
          <AiFillInstagram/>
        </a>
        <a href="https://twitter.com/mikki1596" target="_blank">
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  )
}

export default Footer