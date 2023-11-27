import { useState } from 'react';
import { Calendar } from 'react-calendar';
import useStock from '../../../hooks/calculatecycle';

export default function YourComponent() {
  const [date, setDate] = useState(new Date());
  const [result, setResult] = useState(null); // Inicialize com null

  const { handleMenstrualDays, handleOvulation, handleDayCount } = useStock();

  const formatDate = (date) => {
    const day = new Date(date);
    const dayOfTheWeek = day.getDate();
    const month = day.getMonth() + 1;
    const year = day.getFullYear();
    return dayOfTheWeek + '/' + month + '/' + year;
  };

  const menstruationInfo = (day) => {
    const menstruationDays = 28;
    const menstruation = new Date(day);
    menstruation.setDate(day.getDate() + menstruationDays);

    const ovulation = new Date(menstruation);
    ovulation.setDate(menstruation.getDate() - 14);
    handleMenstrualDays(menstruation);
    handleOvulation(ovulation);
    handleDayCount(menstruation);
    setResult(updateInfo(menstruation, ovulation));
  };

  const updateInfo = (menstruationDay, ovulationDay) => {
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
  };

  return (
    <>
      <Calendar className="calendar" onChange={setDate} value={date} />
      <br />
      <p>Data selecionada: {formatDate(date)}</p>
      <button
        className="btn btn-primary"
        onClick={() => menstruationInfo(date)}
      >
        Calcular Dados
      </button>
      {result}
    </>
  );
}

