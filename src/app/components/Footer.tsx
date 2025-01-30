import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import '../style/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <Link href="https://github.com/shanzay69" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/shanza-khan-620ba0333/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </Link>
      </div>
      <div className="footer-text">
        @SHANZA Khan | 2024
      </div>
    </div>
  );
}

export default Footer;
