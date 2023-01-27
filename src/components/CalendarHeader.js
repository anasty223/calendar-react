import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Modal from "./Modal";
import SmallCalendar from "./SmallCalendar";


const CalendarHeader = () => {
  const [isShown, setIsshown] = useState(false);
  const toggleModal = () => {
      setIsshown(!isShown);
    };


  const{monthIndex,setMonthIndex}=useContext(GlobalContext)

  function handlePrevMonth(){
    setMonthIndex(monthIndex - 1)
  }
  function handleNextMonth(){
    setMonthIndex(monthIndex + 1)
  }

function handleReset(){
  setMonthIndex(monthIndex=== dayjs().month()? monthIndex+Math.random(): dayjs().month())
}
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">Today</button>

<button  onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
 
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(),monthIndex)).format("MMMM YYYY")}
      </h2>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>

 <button type="button"className="ml-2 flex " onClick={toggleModal}> 
     
          
      <span className="material-symbols-outlined text-gray-600 ">
date_range
</span>
    
      </button>

      {isShown && (
        <Modal isShown={isShown} onClose={toggleModal}>
    <SmallCalendar/>
        </Modal>
      )}
    </header>
  );
};

export default CalendarHeader;
