import { useState } from "react";
import useStock from "../../hooks/calculatecycle.js";

export default function SectionBox() {
  const {menstrualDays, ovulationDays, dayCounter} = useStock(); 

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
                <b className="h5 ">Dias para o próximo ciclo menstrual...</b>
              </div>
              <div className="lower-box">
                <span className="ovulation-box">{ovulationDays}</span>
                <p className="h5 ">dias para o período ovulatório.</p>
              </div>
              <div className="lower-box">
                <span className="cycleday-box">{dayCounter}º</span>
                <p className="h6 ">dia do ciclo.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000000">
            <div className=" slide2 ">
              <header className="slide2-header">
                <h2>Como se sente hoje?</h2>
                <span className="h5">Sentiu Algumas das Opções abaixo?</span>
              </header>
              <section className="checkbox-area">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name=""
                    id="flexCheckChecked colica"
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
                    id="flexCheckChecked op2"
                  />
                  <label className="form-check-label" htmlFor="op2">
                    Manchas
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id="flexCheckChecked op3"
                  />
                  <label className="form-check-label" htmlFor="op3">
                    Sangramento
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id="flexCheckChecked op4"
                  />
                  <label className="form-check-label" htmlFor="op4">
                    Alterações no Sono e Apetite
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id="flexCheckChecked op4"
                  />
                  <label className="form-check-label" htmlFor="op4">
                    Tristeza
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id="flexCheckChecked op4"
                  />
                  <label className="form-check-label" htmlFor="op4">
                    Ansiedade
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id="flexCheckChecked op4"
                  />
                  <label className="form-check-label" htmlFor="op4">
                    Irritabilidade
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id="flexCheckChecked op4"
                  />
                  <label className="form-check-label" htmlFor="op4">
                    Inchaço nas Mamas
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id="flexCheckChecked op4"
                  />
                  <label className="form-check-label" htmlFor="op4">
                    Fadiga  
                  </label>
                </div>
              </section>
              <button className="btn btn-primary" type="submit">
                Adicionar ao Relatório
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000000">
            <section className="div-center ">
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
              <button type="submit" className="btn btn-primary">
                Avaliar
              </button>
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
          <span className="visually-hidden">Previous</span>
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
          <span className="visually-hidden">Next </span>
        </button>
      </div>
    </section>
  );
}
