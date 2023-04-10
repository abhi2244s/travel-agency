import React from 'react'
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();
     function dashboardHandler(){
      navigate('/dashboard')
     }
     function homeHandler(){
      navigate('/')
     }
  return (
    <div className='w-5/6 container mx-auto mt-8 text-center'>
      <h1 className="text-[24px] font-bold leading-[30px] pt-5 text-[#FF8682]">Ticket has been booked</h1>
      <button className='bg-[#8DD3BB] p-3 mt-5  rounded' onClick={dashboardHandler}>Go to Dashboard</button>
      <button className='bg-[#8DD3BB] p-3 mt-5 mx-3 rounded' onClick={homeHandler}>Go to Home</button>
    </div>
  )
}

export default Confirmation