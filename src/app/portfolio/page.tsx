import type { NextPage } from "next";
import Link from "next/link";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="websites">
                Websites & Apps
              </button>
              <button type="button" data-filter="hardware">
                Hardware & Circuits
              </button>
              <button type="button" data-filter="ai">
                Buisness Ventures
              </button>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <Link href="/portfolio/aux-battles/" className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/aux-battles/Logo.png" alt="AuxBattles Logo" />
                </div>
                <div className="portfolio-info">
                  <h4>Aux-Battles</h4>
                  <br/>
                  <h6>
                    <ul>
                      <li>Ban from Spotify</li>
                      <li>Server Side Web App</li>
                      <li>Websockets</li>
                    </ul>
                  </h6>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </Link>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/construction.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>U-Fi</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/construction.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Tensor FPGA</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/construction.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Proximity Fuze Bullet</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
