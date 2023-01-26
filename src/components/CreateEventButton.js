import React, { useState } from "react";
import Modal from "./Modal";
import SmallCalendar from "./SmallCalendar";


const CreateEventButton = () => {
    // const [isShown, setIsshown] = useState(false);
    // const toggleModal = () => {
    //     setIsshown(!isShown);
    //   };


  return (
    <div>
      <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xlborder p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <span class="material-symbols-outlined">
add
</span>
      </button>
      {/* {isShown && (
        <Modal isShown={isShown} onClose={toggleModal}>
    
        </Modal>
      )} */}
    </div>
  );
};

export default CreateEventButton;
