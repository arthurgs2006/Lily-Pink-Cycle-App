
import creditCard from "./img/credit-card.png";
import flower from "./img/flowerUX.png";

export default function () {
  return (
    <div className="content container-fluid animate__fadeIn" >
      <header>
        <h1 className="display-6" >
          Pagamentos <b>Lily Pink</b>
        </h1>
      </header>
      <div className="info-area" >
        <section className="high-area">
          <div className="card-box">
            <img src={creditCard} alt="credit_card" className="img-fluid " />
          </div>
          <div className="payment-info">
            <h3>Informações do pagamento</h3>
            <p>
              Pago com: <b>VISA CARD</b>
            </p>
            <p>
              Nome Cadastrado: <b>Rayssa Leal Guedes</b>
            </p>
            <p>
              Número do Cartão: <b>5476 4785 0929 9279</b>
            </p>
            <p>
              CVV: <b>186</b>
            </p>
            <p>
              Vencimento: <b>04/24</b>
            </p>
            <button className="btn btn-warning button-lily">Alterar Cadastro</button>
          </div>
        </section>
        <section className="high-area">
          <div className="card-box">
            <img src={flower} alt="flower_plan" className="img-fluid flower" />
          </div>
          <div className="payment-info">
            <h3 className="">Valor de Pagamento:</h3>
            <span className="value">R$ 20,00</span>
            <p>
              <b>Benefícios:</b>
            </p>
            <ul>
              <li>Calendário Menstrual Atualizado</li>
              <li>Organização dos Períodos e suas Características</li>
              <li>Recomendação para especialistas no Feed</li>
            </ul>
            <button className="btn btn-warning button-lily">Alterar Plano</button>
          </div>
        </section>
      </div>
    </div>
  );
}
