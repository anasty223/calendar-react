import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";


const CreateEventButton = () => {
const{setShowEventModal}=useContext(GlobalContext)

  return (
    <div>
      <button onClick={()=>setShowEventModal(true)} className="border bg-blue-600 p-2 rounded-full flex items-center shadow-md hover:shadow-2xlborder p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <span className="material-symbols-outlined text-white">
add
</span>
      </button>

     
    </div>
  );
};

export default CreateEventButton;
