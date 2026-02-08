"use client";

import React, { useEffect } from "react";
import sal from "sal.js";
import Pabitra from "../../public/images/pabitra.png"
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Service = () => {
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);
  return (
    <>
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row row--15 service-wrapper">
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-12"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
              <div className="content">
                <Image
                  src={Pabitra}
                  alt="portfolio"
                  className="portfolio-avatar"
                />
                <p className="description b1 color-gray mb--0 mt--25" style={{fontSize: '17px'}}>⚡I'm a passionate web developer who loves building complete web application, handling both frontend design and backend logic, creating fast and user-friendly experiences while continuously learning new skills.⚡</p>
                <ul className="social-links">
                  <li><a href="#"><FaLinkedin/></a></li>
                  <li><a href="#"><FaGithub/></a></li>
                </ul>
                <a 
                  class="btn-default btn-large btn-border popup-video vbox-item" 
                  data-vbtype="video" 
                  href="https://github.com/pabitrabarua123"
                  target="_blank">
                  SEE MY PROJECTS
                </a>
              </div>
            </div>
          </div>
            <div
             className="col-lg-6 col-md-6 col-sm-6 col-12"
             data-sal="slide-up"
             data-sal-duration="700"
             data-sal-delay="100"
            >
             <div className="myservice service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
              <div className="content">
    <div className="card">
      <div className="top-lines">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>

      <div className="controls">
        <div className="dot dot-red"></div>
        <div className="dot dot-orange"></div>
        <div className="dot dot-green"></div>
      </div>

      <div className="code-container">
        <code>
          <div className="blink">
            <span className="text-pink">const</span>
            <span className="text-violet">developer</span>
            <span className="text-pink">=</span>
            <span className="text-gray">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 text-white">name:</span>
            <span className="text-gray">'</span>
            <span className="text-green">Pabitra Barua</span>
            <span className="text-gray">',</span>
          </div>
          <div>
            <span className="ml-4 text-white">company:</span>
            <span className="text-gray">'</span>
            <span className="text-green">VirtualNod</span>
            <span className="text-gray">',</span>
          </div>
          <div>
            <span className="ml-4 text-white">location:</span>
            <span className="text-gray">'</span>
            <span className="text-green">West Bengal - Mathabhanga</span>
            <span className="text-gray">',</span>
          </div>
          <div>
            <span className="ml-4 text-white">role:</span>
            <span className="text-gray">'</span>
            <span className="text-green">Fullstack Developer</span>
            <span className="text-gray">',</span>
          </div>
          <div>
            <span className="ml-4 text-white">work_experience:</span>
            <span className="text-gray">'</span>
            <span className="text-green">8+ years</span>
            <span className="text-gray">',</span>
          </div>
          <div>
            <span className="ml-4 text-white">repositories:</span>
            <span className="text-orange">9</span>
            <span className="text-gray">,</span>
          </div>
          <div className="ml-4">
            <span className="text-white">skills:</span>
            <span className="text-gray">['</span>
            <span className="text-cyan">HTML</span><span className="text-gray">', '</span>
            <span className="text-cyan">CSS</span><span className="text-gray">', '</span>
            <span className="text-cyan">JavaScript</span><span className="text-gray">', '</span>
            <span className="text-cyan">TypeScript</span><span className="text-gray">', '</span>
            <span className="text-cyan">ReactJS</span><span className="text-gray">', '</span>
            <span className="text-cyan">NextJS</span><span className="text-gray">', '</span>
            <span className="text-cyan">Redux</span><span className="text-gray">', '</span>
            <span className="text-cyan">NodeJS</span><span className="text-gray">', '</span>
            <span className="text-cyan">Express</span><span className="text-gray">', '</span>
            <span className="text-cyan">MySQL</span><span className="text-gray">', '</span>
            <span className="text-cyan">PostgreSQL</span><span className="text-gray">', '</span>
            <span className="text-cyan">Prisma</span><span className="text-gray">', '</span>
            <span className="text-cyan">Bootstrap</span><span className="text-gray">', '</span>
            <span className="text-cyan">Tailwind</span><span className="text-gray">', '</span>
            <span className="text-cyan">Chakra UI</span><span className="text-gray">', '</span>
            <span className="text-cyan">Figma</span><span className="text-gray">', '</span>
            <span className="text-cyan">Adobe Photoshop</span><span className="text-gray">', '</span>
            <span className="text-cyan">Material UI</span><span className="text-gray">'],</span>
          </div>
          <div>
            <span className="ml-4 text-white">hireable:</span>
            <span className="text-orange">true</span>
            <span className="text-gray">,</span>
          </div>
          <div>
            <span className="text-gray">{'};'}</span>
          </div>
        </code>
      </div>
    </div>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
