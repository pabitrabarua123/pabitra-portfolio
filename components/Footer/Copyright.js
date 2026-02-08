import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <>
      <div className="copyright-area copyright-style-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="copyright-right text-center text-lg-center">
                <p className="copyright-text">
                  Copyright © 2025. Portfolio by
                  <Link
                    href="https://www.linkedin.com/in/pabitradev09"
                    className="btn-read-more ps-2"
                  >
                    <span>Pabitra Barua</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
