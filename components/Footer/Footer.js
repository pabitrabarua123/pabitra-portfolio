import Separator from "@/app/separator";

import Image from "next/image";
import Link from "next/link";
import Quote2 from "../../public/images/box.png";
import { useAppContext } from "@/context/Context";

const Footer = () => {
  const { isLightTheme } = useAppContext();
  return (
    <>
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative mt-0">
        <Separator isLightTheme={isLightTheme} top={true} />
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center mb--30">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget text-center">
                  <div>
                    <Link href="/">
                      <Image
                        src={Quote2}
                        width={60}
                        alt="Quote"
                      />
                    </Link>
                  </div>

                  {/* Elegant blockquote */}
                  <figure className="footer-quote" aria-label="Footer quote">
                    <blockquote className="quote">
                      <p className="quote-text">
                        To me, development is more about mindset than syntax.
                      </p>
                    </blockquote>
                    <figcaption className="quote-author">— Pabitra Barua</figcaption>
                  </figure>

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
