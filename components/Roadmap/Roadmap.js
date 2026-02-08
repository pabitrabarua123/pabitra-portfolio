"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

import RoadmapData from "../../data/roadmap.json";

const Roadmap = () => {
  useEffect(() => {
    Sal();
  }, []);
  return (
    <>
      <div className="roadmap-section rainbow-section-gap rainbow-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">MY CAREER JOURNEY</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Roles That Shaped My Career
                </h2>
                <p className="description b1" style={{maxWidth: '600px', margin: '0 auto'}}>
                 I started my web development journey in 2017, working with various companies and growing through each role to become the developer I am today.
                </p>
              </div>
            </div>
          </div>
          <br/><br/><br/><br/>
          {RoadmapData &&
            RoadmapData.roadmap.slice().reverse().map((data, index) => (
              <div className="row changelog_info" id="v120" key={index}>
                <div className="col-lg-3 changelog_date">
                  <div className="c_date">
                    <h6>{data.heading} </h6>
                    <p>{data.date}</p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="version_info">
                    {data.isCheck ? (
                      <div className="c_version">
                        <i className="fa-duotone fa-check"></i>
                      </div>
                    ) : data.isLoading ? (
                      <div className="c_version bg-yellow">
                        <i className="fa-duotone fa-loader"></i>
                      </div>
                    ) : (
                      <div className="c_version bg-info">
                        <i className="fa-regular fa-message-lines"></i>
                      </div>
                    )}

                    {data.isBorader ? (
                      <div className="line bottom_half"></div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="changelog_content">
                    <p className="title" style={{fontSize: '18px'}}>{data.title}</p>
                    <ul className="content-list experience">
                      {data.list &&
                        data.list.map((item, i) => (
                          <li key={i}>{item.desc}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
