import { useState } from "react";
import { Calendar } from "react-calendar";
import useStock from "../../../hooks/calculatecycle";
import Alert from "../../alert/Alert";

export default function YourComponent() {
  const [date, setDate] = useState(new Date());
  const [result, setResult] = useState(null); // Inicialize com null
  const [showRatingAlert, setShowRatingAlert] = useState(false);

  const {
    handleMenstrualDays,
    handleOvulation
  } = useStock();

  const formatDate = (date) => {
    const day = new Date(date);
    const dayOfTheWeek = day.getDate();
    const month = day.getMonth() + 1;
    const year = day.getFullYear();
    return dayOfTheWeek + "/" + month + "/" + year;
  };

  const verificationDate = (menstruation, ovulation) => {
    if (
      handleOvulation(ovulation) == false ||
      handleMenstrualDays(menstruation) == false
    ) {
      return false;
    }
    return true;
  };

  const menstruationInfo = (day) => {
    const menstruationDays = 28;
    const menstruation = new Date(day);
    menstruation.setDate(day.getDate() + menstruationDays);

    const ovulation = new Date(menstruation);
    ovulation.setDate(menstruation.getDate() - 14);
    handleMenstrualDays(menstruation);
    handleOvulation(ovulation);
    if (verificationDate(menstruation, ovulation) == false) {
      setResult(
        updateInfo(
          new Date(),
          new Date(),
          verificationDate(menstruation, ovulation)
        )
      );
    } else {
      setResult(
        updateInfo(
          menstruation,
          ovulation,
          verificationDate(menstruation, ovulation)
        )
      );
    }
  };

  const updateInfo = (menstruationDay, ovulationDay, verification) => {
    if (verification == true) {
      return (
        <div className="info mt-3" data-aos="flip-up">
          <span className="h6 calendar-box">
            <p>Data da Próxima Menstruação:</p>
            <b>{formatDate(menstruationDay)}</b>
          </span>
          <span className="h6 calendar-box">
            <p>Data da Próxima Ovulação:</p>
            <b>{formatDate(ovulationDay)}</b>
          </span>
        </div>
      );
    }
    return (
      <Alert
        onClose={null}
        content={
          "Oops! Datas futuras ou acima de um mês não serão aceitas em nosso sistema... Insira um valor válido."
        }
        typeAlert={"alert-danger"}
        closeBtn={false}
      />
    );
  };

  return (
    <>
      <Calendar className="calendar" onChange={setDate} value={date} />
      <br />
      <p>Data selecionada: {formatDate(date)}</p>
      <button
        className="btn btn-primary"
        data-toggle="modal"
        type="button"
        data-target="#ExemploModalCentralizado"
        onClick={() => menstruationInfo(date)}
      >
        Calcular Dados
      </button>
      {result}
    </>
  );
}
