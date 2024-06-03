import "../styles/text.css";
import { Nixie_One } from "next/font/google";

const nixie_one = Nixie_One({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400"]
});

export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/logo.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Nicholas Dimidik</h1>
            <p><b className="full-text ">FULL</b> Stack Developer</p>
            <div className="social-links">
              {/* <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a> */}
              <a href="https://www.facebook.com/nick.dickerman/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/StickOnAStick" target="_blank">
                <i className="fa fa-github"/>
              </a>
              <a href="https://www.instagram.com/nicholas_dimidik/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/nicholas-dimidik-71b20b159/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
