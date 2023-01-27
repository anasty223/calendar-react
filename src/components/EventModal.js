import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

export default function EventModal() {
  const [date,SetDate]=useState(new Date())
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );

  const [time, setTime] = useState(
    selectedEvent ? selectedEvent.time : ""
  );

  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      time,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>

            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
          <label className="text-lg text-grey-600 font-medium">
          Add new idea item
            <input
              type="text"
              name="title"
              placeholder="Title goes here..."
              value={title}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-green-500"
              onChange={(e) => setTitle(e.target.value)}
            />
          <h4 className="text-xs text-gray-300">title*</h4>
          </label>
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>


            <p>
            
              <label className="text-gray-600" for="appt-time">
           
              Begin time:
            <input
              type="time"
              name="appt-time"
              placeholder="Begin time"
              value={time}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
              className="pt-1 border-0 text-gray-600 pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-green-500"
              onChange={(e) => setTime(e.target.value)}
            /> <p className="border-b-2 border-gray-200 pt-4">  {daySelected.format("DD. MM. YYYY")}</p>
           </label></p>
            <span className="material-icons-outlined text-gray-400">
              {/* segment */}
            </span>
            <label>
            <h4 className="text-xs text-gray-300">   description</h4>
            <input
              type="text"
              name="description"
              placeholder=""
              value={description}
              required
              className="pt-16 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-green-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            </label>
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
        <p className="text-xs flex-1 text-xs text-gray-400">created/update at: {date.toLocaleDateString()}</p>
        {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer p-5"
              >
                delete
              </span>
            )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}