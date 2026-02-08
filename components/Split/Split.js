import Image from "next/image";
import Link from "next/link";

import splitImg from "../../public/images/split/split-8.png";
import oneclik from "../../public/images/split/oneclick2.png" 

const Split = () => {
  return (
    <>
      <div className="rainbow-split-area rainbow-section-gap pb--100">
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
                  <span className="theme-gradient">MY WORK</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Showcasing My Best Web Creations
                </h2>
                <p className="description b1" style={{maxWidth: '600px', margin: '0 auto'}}>
                  A collection of my recent web development projects showcasing modern design, clean code, and real-world functionality built with React, Node.js, and other technologies I love working with.
                </p>
              </div>
            </div>
          </div>
          <br/> <br/>  <br/>
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      src={oneclik}
                      alt="split Images"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="200"
                    >
                     AI Text Humanizer
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="300"
                    >
                     Transform robotic AI-generated content into natural, human-sounding text with ease.
                    </p>
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="350"
                    >
                      <li>Created using Next.js with OpenAI API integration and real-time streaming.</li>
                      <li>Secured with NextAuth, so user login and permissions are handled safely and correctly.</li>
                      <li>Integrated Stripe payments to unlock premium features securely.</li>
                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link href="https://github.com/pabitrabarua123/oneclickhuman---Frontend" legacyBehavior>
                        <a className="btn-default" target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator-animated animated-true mt--60 mb--60"></div>
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="200"
                    >
                      Instant Content with AI
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="300"
                    >
                      Unlock Conversion-Driven Content: Business Bios, Facebook
                      Ads, Product Descriptions, Emails, Landing Pages, Social
                      Ads, and Beyond.
                    </p>
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="350"
                    >
                      <li>- Craft Articles in Under 20 Seconds.</li>
                      <li>- Reclaim Hundreds of Valuable Hours with AI</li>
                      <li>- Elevate Copywriting with Rewriter.</li>
                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link className="btn-default" href="/contact">
                        Contact With Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      src={splitImg}
                      alt="split Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator-animated animated-true mt--60 mb--60"></div>
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      src={splitImg}
                      alt="split Images"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="200"
                    >
                      Instant Content with AI
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="300"
                    >
                      Unlock Conversion-Driven Content: Business Bios, Facebook
                      Ads, Product Descriptions, Emails, Landing Pages, Social
                      Ads, and Beyond.
                    </p>
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="350"
                    >
                      <li>- Craft Articles in Under 20 Seconds.</li>
                      <li>- Reclaim Hundreds of Valuable Hours with AI</li>
                      <li>- Elevate Copywriting with Rewriter.</li>
                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link className="btn-default" href="/contact">
                        Contact With Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator-animated animated-true mt--60 mb--60"></div>
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="200"
                    >
                      Instant Content with AI
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="300"
                    >
                      Unlock Conversion-Driven Content: Business Bios, Facebook
                      Ads, Product Descriptions, Emails, Landing Pages, Social
                      Ads, and Beyond.
                    </p>
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="350"
                    >
                      <li>- Craft Articles in Under 20 Seconds.</li>
                      <li>- Reclaim Hundreds of Valuable Hours with AI</li>
                      <li>- Elevate Copywriting with Rewriter.</li>
                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link className="btn-default" href="/contact">
                        Contact With Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      src={splitImg}
                      alt="split Images"
                    />
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

export default Split;
