import React, { useEffect, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

const ContextWrapper = (props) => {
    const[monthIndex,setMonthIndex]=useState(dayjs().month())
    const [smallCalendarMonth,setSmallCalendarMonth]=useState(null)
    const [daySelected,setDaySelected]=useState(dayjs())


    useEffect(() => {
      if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth);
      }
    }, [smallCalendarMonth]);
  return (
    
    <GlobalContext.Provider value={{daySelected,setDaySelected,monthIndex,setMonthIndex,setSmallCalendarMonth,smallCalendarMonth}}>
{props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper