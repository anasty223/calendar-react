import dayjs from 'dayjs'
import React from 'react'

const Day = ({day,rowIdx}) => {
function getCurrentDayClass(){
return day.format(`DD-MM-YY`)===dayjs().format("DD-MM-YY")? ' bg-green-300 text-white h-24 w-24': ""
}

  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1 ">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()} `}
        >
          {day.format("DD")}
        </p>
      </header>
    </div>
  )
}

export default Day