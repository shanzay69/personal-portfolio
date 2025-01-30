import React from 'react'
import Link from 'next/link';
import '../style/project.css';

export default function Project() {
  return (
    <section id='project'className="project">
      <h2 className="section-heading">My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <Link href="https://onlinewebsite-six.vercel.app/" target="_blank">
            <div className="card-content">
              <div className="card-image"></div>
              <h3>Project 1</h3>
              <h4>Click On MY Project And visit My Work </h4>
            </div>
          </Link>
        </div>
        <div className="project-card">
          <Link href="https://pizza-website-teal-iota.vercel.app/" target="_blank">
            <div className="card-content">
              <div className="card-image"></div>
              <h3>Project 2</h3>
              <h4>Click On MY Project And visit My Work </h4>
            </div>
          </Link>
        </div>
        <div className="project-card">
          <Link href="https://blog-sanity-brown-two.vercel.app/" target="_blank">
            <div className="card-content">
              <div className="card-image"></div>
              <h3>Project 3</h3>
              <h4>Click On MY Project And visit My Work </h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};


