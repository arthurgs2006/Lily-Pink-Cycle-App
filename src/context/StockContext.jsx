import { createContext, useState } from "react";

export function StockContextProvider({ children }) {
  const [menstrualDays, setMenstrualDays] = useState([28]);
  const [ovulationDays, setOvulationDays] = useState([4]);
  const [dayCounter, setDayCounter] = useState([1]);

  const handleMenstrualDays = (dayMenstruation) => {
    const date = Math.abs(new Date(dayMenstruation) - new Date());
    const cycleDate = Math.ceil(date / (1000 * 60 * 60 * 24));
    if (cycleDate > 28 || cycleDate <= 0) {
      return false;
    } else{
      setMenstrualDays(cycleDate);
    }
    
  };

  const handleOvulation = (dayOvulation) => {
    const date = Math.abs(new Date(dayOvulation) - new Date());
    const cycleDate = Math.ceil(date / (1000 * 60 * 60 * 24));
    if (cycleDate > 14 || cycleDate <= 0) {
      return false;
    } else{
      setOvulationDays(cycleDate);
    }
  };

  const handleDayCount = (dayMenstruation) => {
    const today = new Date();
    const date = Math.abs(today.getDate() - dayMenstruation.getDate() - 1);
    if (date > 26) {
      return false;
    } else {
      setDayCounter(date);
    }
    
  };

  const stock = {
    handleMenstrualDays,
    menstrualDays,
    setMenstrualDays,
    handleOvulation,
    ovulationDays,
    dayCounter,
    handleDayCount
  };
  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}

export const StockContext = createContext({});
