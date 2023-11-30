import { useState } from "react";
import { Chart } from "react-google-charts";

export default function () {
  const [dataUsage, setDataUsage] = useState(0.0);
  const [timeUsage, setTimeUsage] = useState(0.0);

  const handleDataUsageChange = (event) => {
    setDataUsage(event.target.value);
  };

  const handleTimeUsageChange = (event) => {
    setTimeUsage(event.target.value);
  };

  return (
    <>
      <div className="content container-fluid " >
        <header>
          <h1 className="display-6">Informações de Uso do Aplicativo</h1>
        </header>
        <div className="info-area ">
          <div className="info-box-area">
            <label className="label-box">Consumo de dados:</label>
            <input
              type="number"
              value={dataUsage}
              onChange={handleDataUsageChange}
              className="input-box"
              disabled
            />
          </div>
          <div className="info-box-area">
            <label className="label-box">Tempo de uso:</label>
            <input
              type="number"
              value={Number(timeUsage)}
              onChange={Number(handleTimeUsageChange)}
              className="input-box"
              disabled
            />
          </div>
          <div className="info-area form-settings">
            <Chart
              className=""
              chartType="BarChart"
              loader={<h1>Carregando gráfico</h1>}
              data={[
                ["Tipo de uso", "Consumo de dados"],
                ["Uso do aplicativo", dataUsage],
                ["Outros", 100 - dataUsage],
              ]}
              options={{
                title: "Consumo de dados do aplicativo",
                chartArea: { width: "50%" },
                hAxis: {
                  title: "Consumo de dados (MB)",
                  minValue: 0,
                },
                vAxis: {
                  title: "Tipo de uso",
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
