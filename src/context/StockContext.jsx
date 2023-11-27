import { createContext, useState, useEffect } from "react";


export function StockContextProvider({ children }) {
  const [menstrualDays, setMenstrualDays] = useState([28]);
  const [ovulationDays, setOvulationDays] = useState([4]);
  const [dayCounter, setDayCounter] = useState([1]);
  const handleMenstrualDays = (dayMenstruation) => {
    const date = Math.abs(new Date(dayMenstruation) - new Date());
    const cycleDate = Math.ceil(date / (1000 * 60 * 60 * 24));
    if(cycleDate > 28 || cycleDate <= 0) return alert("Ajude o nosso projeto contribuindo em nossa vaquinha, com o pix: (16) 992428919...")
    setMenstrualDays(cycleDate);
  };

  const handleOvulation = (dayOvulation) => {
    const date = Math.abs(new Date(dayOvulation) - new Date());
    const cycleDate = Math.ceil(date / (1000 * 60 * 60 * 24));
    if(cycleDate > 14 || cycleDate <= 0) return ''
    setOvulationDays(cycleDate);
  }

  const handleDayCount = (dayMenstruation) => {
    const today = new Date()
    const date = today.getDate() - dayMenstruation.getDate() - 1
    if (date >= 25 || date <= 0) return ''
    setDayCounter(date);
  }

  const stock = { handleMenstrualDays, menstrualDays, setMenstrualDays, handleOvulation, ovulationDays, dayCounter, handleDayCount };
  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}

export const StockContext = createContext({});