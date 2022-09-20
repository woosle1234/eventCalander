import React from "react";
import Calander from "./Calander.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../Asset/slides/slide 1.png";
import slide2 from "../Asset/slides/slide 2.png";
import slide3 from "../Asset/slides/slide 3.png";
import slide4 from "../Asset/slides/slide 4.png";
import slide5 from "../Asset/slides/slide 5.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yugiohText: "Test",
      magicText: "Test",
      pokemonText: "Test",
      digimonText: "Test",
      weissText: "Test"
    };
  }

  calanaderChange(idx) {
    switch (idx) {
      case 0:
        window.calanderComponent.playScroll();
        break;
      case 1:
        this.setState({
          yugiohText: window.calanderComponent.getYugiohEvents()
        });
        break;
      case 2:
        this.setState({
          magicText: window.calanderComponent.getMagicEvents()
        });
        break;
      case 3:
        this.setState({
          pokemonText: window.calanderComponent.getPokemonEvents()
        });
        break;
      case 4:
        this.setState({
          digimonText: window.calanderComponent.getDigimonEvents()
        });
        break;
      case 5:
        this.setState({
          weissText: window.calanderComponent.getWeissEvents()
        });
        window.calanderComponent.resetScroll();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        interval={30000}
        autoPlay={true}
        infiniteLoop={true}
        autoFocus={true}
        useKeyboardArrows={true}
        onChange={(idx, arg) => this.calanaderChange(idx)}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            padding: 0
          }}
        >
          <strong>
            <div className="row  bg-dark" style={{ color: "yellow" }}>
              <div className="col">
                <h2>Sunday</h2>
              </div>
              <div className="col">
                <h2>Monday</h2>
              </div>
              <div className="col">
                <h2>Tuesday</h2>
              </div>
              <div className="col">
                <h2>Wednesday</h2>
              </div>
              <div className="col">
                <h2>Thursday</h2>
              </div>
              <div className="col">
                <h2>Friday</h2>
              </div>
              <div className="col">
                <h2>Saturday</h2>
              </div>
            </div>
          </strong>
          <Calander />;
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            padding: 0,
            backgroundColor: "black"
          }}
        >
          <div
            style={{
              width: "45vw",
              height: "50vh",
              right: "5vw",
              bottom: "6vh"
            }}
            className="eventDivText d-flex justify-content-center align-items-center"
          >
            <div className="container">
              <div className="row">
                <h1>
                  <strong>{this.state.yugiohText[0]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h1>
                  <strong>{this.state.yugiohText[1]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h2>
                  <strong>{this.state.yugiohText[2]}</strong>
                </h2>
              </div>
            </div>
          </div>
          <img
            style={{
              maxHeight: "100vh",
              maxWidth: "100wh",
              width: "auto",
              height: "auto"
            }}
            src={slide1}
            alt="..."
          />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            padding: 0,
            backgroundColor: "black"
          }}
        >
          <div
            style={{
              width: "45vw",
              height: "50vh",
              left: "5vw",
              bottom: "6vh"
            }}
            className="eventDivText d-flex justify-content-center align-items-center"
          >
            <div className="container">
              <div className="row">
                <h1>
                  <strong>{this.state.magicText[0]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h1>
                  <strong>{this.state.magicText[1]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h2>
                  <strong>{this.state.magicText[2]}</strong>
                </h2>
              </div>
            </div>
          </div>
          <img
            style={{
              maxHeight: "100vh",
              maxWidth: "100wh",
              width: "auto",
              height: "auto"
            }}
            src={slide2}
            alt="..."
          />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            padding: 0,
            backgroundColor: "black"
          }}
        >
          <div
            style={{
              width: "45vw",
              height: "50vh",
              right: "5vw",
              bottom: "6vh"
            }}
            className="eventDivText d-flex justify-content-center align-items-center"
          >
            <div className="container">
              <div className="row">
                <h1>
                  <strong>{this.state.pokemonText[0]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h1>
                  <strong>{this.state.pokemonText[1]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h2>
                  <strong>{this.state.pokemonText[2]}</strong>
                </h2>
              </div>
            </div>
          </div>
          <img
            style={{
              maxHeight: "100vh",
              maxWidth: "100wh",
              width: "auto",
              height: "auto"
            }}
            src={slide3}
            alt="..."
          />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            padding: 0,
            backgroundColor: "black"
          }}
        >
          <div
            style={{
              width: "45vw",
              height: "50vh",
              left: "5vw",
              bottom: "6vh"
            }}
            className="eventDivText d-flex justify-content-center align-items-center"
          >
            <div className="container">
              <div className="row">
                <h1>
                  <strong>{this.state.digimonText[0]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h1>
                  <strong>{this.state.digimonText[1]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h2>
                  <strong>{this.state.digimonText[2]}</strong>
                </h2>
              </div>
            </div>
          </div>
          <img
            style={{
              maxHeight: "100vh",
              maxWidth: "100wh",
              width: "auto",
              height: "auto"
            }}
            src={slide4}
            alt="..."
          />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            padding: 0,
            backgroundColor: "black"
          }}
        >
          <div
            style={{
              width: "45vw",
              height: "50vh",
              right: "5vw",
              bottom: "6vh"
            }}
            className="eventDivText d-flex justify-content-center align-items-center"
          >
            <div className="container">
              <div className="row">
                <h1>
                  <strong>{this.state.weissText[0]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h1>
                  <strong>{this.state.weissText[1]}</strong>
                </h1>
              </div>
              <br />
              <div className="row">
                <h2>
                  <strong>{this.state.weissText[2]}</strong>
                </h2>
              </div>
            </div>
          </div>
          <img
            style={{
              maxHeight: "100vh",
              maxWidth: "100wh",
              width: "auto",
              height: "auto"
            }}
            src={slide5}
            alt="..."
          />
        </div>
      </Carousel>
    );
  }
}

export default Main;
