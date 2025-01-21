'use client'
import React, { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../style/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <IoHome />
        </div>
        <ul className="menu-items">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
