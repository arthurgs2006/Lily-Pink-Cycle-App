import { useState } from "react";
import useStock from "../../hooks/calculatecycle.js";
import Alert from "../alert/Alert.jsx";

export default function SectionBox() {
  const { menstrualDays, ovulationDays, dayCounter } = useStock();
  const [showRatingAlert, setShowRatingAlert] = useState(false);
  const [showFormResponse, setshowFormResponse] = useState(false);

  const handleRatingAlertClose = () => {
    setShowRatingAlert(false);
  };
  const handleFormResponse = () => {
    setshowFormResponse(false);
  };

  return (
    <section className="principalBox container">
      <div
        id="carouselExampleInterval"
        className="carousel slide sectioncarousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carouselContent" data-aos="fade-up">
          <div
            className="carousel-item active slide1"
            data-bs-interval="1000000"
          >
            <div className="info-board " data-aos="flip-up">
              <div className="menstruation-day-counter">
                <span className="daysP">{menstrualDays}</span>
                <span className="h6 title">
                  Dias para o próximo ciclo menstrual...
                </span>
              </div>
              <div className="lower-box">
                <span className="ovulation-box">{ovulationDays}</span>
                <p className="h5 subtitle ">dias para o período ovulatório.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000000">
            <section className="">
              <div className=" slide2 ">
                <header className="slide2-header">
                  <h2 className="h2 ">Como se sente hoje?</h2>
                  <span className="h6 ">Sentiu Algumas das Opções abaixo?</span>
                </header>
                <section className="checkbox-area ">
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name=""
                      id="colica"
                    />
                    <label className="form-check-label" htmlFor="colica">
                      Cólica
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="manchas"
                    />
                    <label className="form-check-label " htmlFor="manchas">
                      Manchas
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="sangramento"
                    />
                    <label className="form-check-label" htmlFor="sangramento">
                      Sangramento
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="Insônia"
                    />
                    <label className="form-check-label" htmlFor="Insônia">
                      Insônia
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="Tristeza"
                    />
                    <label className="form-check-label" htmlFor="Tristeza">
                      Tristeza
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="Ansiedade"
                    />
                    <label className="form-check-label" htmlFor="Ansiedade">
                      Ansiedade
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="Irritabilidade"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Irritabilidade"
                    >
                      Irritabilidade
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="Inchaço"
                    />
                    <label className="form-check-label" htmlFor="Inchaço">
                      Inchaço nas Mamas
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="Fadiga"
                    />
                    <label className="form-check-label" htmlFor="Fadiga">
                      Fadiga
                    </label>
                  </div>
                </section>
                {showFormResponse && (
                  <Alert
                    onClose={handleFormResponse}
                    content={"Relatório Enviado!"}
                    typeAlert={"alert-info  "}
                    closeBtn={true}
                  />
                )}
                <button
                  className="btn btn-primary btn-submit"
                  type="submit"
                  onClick={() => setshowFormResponse(true)}
                >
                  Adicionar ao Relatório
                </button>
              </div>
            </section>
          </div>
          <div className="carousel-item" data-bs-interval="1000000">
            <section className="div-center calendar">
              <span className="h5">
                Como foi sua experiência utilizando a nossa aplicação web?
              </span>
              <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
              <button className="btn" onClick={() => setShowRatingAlert(true)}>
                Avaliar
              </button>

              {showRatingAlert && (
                <Alert
                  onClose={handleRatingAlertClose}
                  content={
                    "Obrigado pela avaliação! Confira mais sobre Lily Pink Cycle!"
                  }
                  typeAlert={"alert-success"}
                  closeBtn={true}
                />
              )}
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev arrow"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon arrow-btn"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next arrow"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon arrow-btn"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Próximo </span>
        </button>
      </div>
    </section>
  );
}
