import React from 'react'

const Day = ({day}) => {
  return (
    <div className='border border-gray-200 flex flex-col'>
        {day.format('DD')}
        <p className='text-sm p-1 my-1 text-center'></p>
    </div>
  )
}

export default Day