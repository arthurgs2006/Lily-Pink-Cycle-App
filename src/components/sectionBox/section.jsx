export default function () {
  return (
    <section className="principalBox container" >
      <div
        id="carouselExampleInterval"
        className="carousel slide sectioncarousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carouselContent" data-aos='fade-up' >
          <div
            className="carousel-item active slide1"
            data-bs-interval="1000000"
          >
            <div className="div-center">
              <span className="daysP">20</span>
              <p className="h5 ">
                Dias para o <b>próximo ciclo menstrual...</b>
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000000" >
            <div className=" slide2">
              <h2>Como se sente hoje?</h2>
              <span className="h5">Sentiu Algumas das Opções abaixo?</span>
              <section >
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
                      Enchaqueca
                    </label>
                  </div>
                </section>
                <button className="btn btn-primary" type="submit">
                  Adicionar ao Relatório
                </button>
              </section>
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
                <input type="radio" id="star3"  name="rate" value="3" />
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
              <button type="submit" className="btn btn-primary">Avaliar</button>
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