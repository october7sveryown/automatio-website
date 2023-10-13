import Carousels from "./Carousels";
import NavBar from "./Navbar";
import Jumbotron from "./Jumbotron";
import { useState } from "react";
import Card from "./Card";
import { cardsdata1 } from "./CardsData";
import { cardsdata2 } from "./CardsData";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function App() {

  const [cardContent,setCardContent] = useState({
    title : 'Effortless Control',
    description : 'Imagine being able to control your entire home with a simple voice command or a tap on your smartphone. With our smart home solutions, you can easily manage lighting, thermostats, security, and more, all from the palm of your hand.'
  })

  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
        <NavBar />
      </header>
      <body>
        <Jumbotron/>
        <section id="services">
          <br/>
          <div className="row">
          <h1 className="display-6">Our services</h1>
          <p className="lead">What we offer</p>
          </div>
          <div className="container text-start">
              <div className="row align-items-start">
                {
                    cardsdata1.map((card)=>{
                      console.log(card)
                      return <Card card={card}/>
                    })
                  }
              </div>
              <div className="row align-items-start">
              {
                    cardsdata2.map((card)=>{
                      console.log(card)
                      return <Card card={card}/>
                    })
                  }
              </div>
          </div>
        </section>
        <section id="about">
        <br/>
          <div className="row">
          <h1 className="display-6">About us</h1>
          <p className="lead">Who we are</p>
          </div>
          <AboutUs/>
        </section>
        <section id="contact">
        <div className="row">
          <h1 className="display-6">Contact us</h1>
          <p className="lead">Get in touch</p>
          </div>
          <Contact/>
        </section>
      </body>
      <footer>
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Follow us on 
              <a href="https://facebook.com/automatio"><FontAwesomeIcon icon={faFacebook}/></a>
              <a href=""><FontAwesomeIcon icon={faXTwitter}/></a>
              <a href="https://instagram.com/automatio.ca"><FontAwesomeIcon icon={faInstagram}/></a>
            </p>
          </div>
          <div className="col-md-6">
            <p>Call us now: <a href="tel:647-914-2428">647-914-2428</a><a href="tel:437-313-2772">437-313-2772</a></p>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
