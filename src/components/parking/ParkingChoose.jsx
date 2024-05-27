import "./parkingchoose.css";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { TypeAnimation } from "react-type-animation";
import { Container } from "react-bootstrap";
import PostMethod from "../PostMethod";
import { useLocation } from "react-router-dom";

const d = new Date();
let hour = parseInt(d.getHours());
let formattedHour = hour.toString().padStart(2, '0'); // Convert to string and pad with '0' if needed
let hour1 = (hour + 1) % 24;
let formattedHour1 = hour1.toString().padStart(2, '0');
let hour2 = (hour1 + 1) % 24;
let formattedHour2 = hour2.toString().padStart(2, '0');
let hour3 = (hour2 + 1) % 24;
let formattedHour3 = hour3.toString().padStart(2, '0');
let hour4 = (hour3 + 1) % 24;
let formattedHour4 = hour4.toString().padStart(2, '0');
let hour5 = (hour4 + 1) % 24;
let formattedHour5 = hour5.toString().padStart(2, '0');
let hour6 = (hour5 + 1) % 24;
let formattedHour6 = hour6.toString().padStart(2, '0');
let hour7 = (hour6 + 1) % 24;
let formattedHour7 = hour7.toString().padStart(2, '0');
let hour8 = (hour7 + 1) % 24;
let formattedHour8 = hour8.toString().padStart(2, '0');


const length = 60;


const time = [
  {
    Time: formattedHour + ":00:00",
    occupied: [],
  },
  {
    Time: formattedHour1 + ":00:00",
    occupied: [],
  },
  {
    Time: formattedHour2 + ":00:00",
    occupied: [],
  },
  {
    Time: formattedHour3 + ":00:00",
    occupied: [],
  },
  {
    Time: formattedHour4 + ":00:00",
    occupied: [],
  },
  {
    Time: formattedHour5 + ":00:00",
    occupied: [],
  },
  {
    Time: formattedHour6 + ":00:00",
    occupied: [],
  },
  {
    Time: formattedHour7 + ":00:00",
    occupied: [],
  },
  {
    Time: formattedHour8 + ":00:00",
    occupied: [],
  },
];


const slots = Array.from({ length: length }, (_, i) => i + 1);

export default function Parkings() {

  const [selectedTime, setSelectedTime] = useState(time[0]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [apiData, setApiData] = useState(null);
  const location = useLocation();
  const parkingId = new URLSearchParams(location.search).get('parkingId');
  localStorage.setItem('time', selectedTime.Time)

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const time = selectedTime.Time
        const data = { parkingId, time }
        const response = await PostMethod('/ticket/getBookedSlotNumbers', data)
        setApiData(response.data);
        selectedTime.occupied = response.data;
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchApiData();
  }, [selectedTime]);

  return (
    <div className="App">
      <Time
        selectedHour={selectedTime}
        onChange={(selectedHour) => {
          setSelectedSlots([]);
          setSelectedTime(selectedHour);
        }}
      />
      <ShowCase />
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Slots
          Selectedhour={selectedTime}
          selectedSlots={selectedSlots}
          onSelectedSlotsChange={(selectedSlots) =>
            setSelectedSlots(selectedSlots)
          }
        />
      </Container>
      {selectedSlots.length != 0 ? <p className="info" style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
        You have selected slot no:  <span className="count">{selectedSlots}</span><br />
      </p> :
        <p className="info" style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
          Please select a slot.
        </p>
      }
    </div>
  );
}

function Time({ selectedHour, onChange }) {
  return (
    <>
      <div className="Time my-3" style={{ display: 'flex', justifyContent: 'center' }}>
        <label htmlFor="time" style={{ color: 'white' }}>Select Starting Time:</label>
        <select
          id="time"
          value={selectedHour.name}
          onChange={(e) => {
            onChange(time.find((selectedHour) => selectedHour.Time === e.target.value));
          }}
        >
          {time.map((selectedHour) => (
            <option key={selectedHour.Time} value={selectedHour.Time}>
              {selectedHour.Time}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }} className='my-3'>
        <TypeAnimation
          sequence={[
            'Notice that every ticket lasts an hour.',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '24px', display: 'inline-block', color: '#EEF7FF' }}
          repeat={1}
        />
      </div>
    </>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase mb-3">
      <li>
        <span className="slot" /> <small>Available</small>
      </li>
      <li>
        <span className="slot selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="slot occupied" /> <small>Booked</small>
      </li>
    </ul>
  );
}

function Slots({ Selectedhour, selectedSlots, onSelectedSlotsChange }) {


  function handleSelectedState(slot) {
    const isSelected = selectedSlots.includes(slot);
    if (isSelected) {
      onSelectedSlotsChange(
        selectedSlots.filter((selectedSlot) => selectedSlot !== slot)
      );
    } else {
      onSelectedSlotsChange([slot]);
    }
  }
  localStorage.setItem('selectedSlot', selectedSlots[0])

  return (
    <div className="Slots">

      <div className="allSlots">
        {slots.map((slot) => {
          const isSelected = selectedSlots.includes(slot);
          const isOccupied = Selectedhour.occupied.includes(slot);
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center", // Horizontally center the content
                alignItems: "center", // Vertically center the content
              }}
              tabIndex="0"
              key={slot}
              className={clsx(
                "slot",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(slot)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                    if (e.key === "Enter") {
                      handleSelectedState(slot);
                    }
                  }
              }
            >{slot}</div>
          );
        })}
      </div>
    </div>
  );
}
