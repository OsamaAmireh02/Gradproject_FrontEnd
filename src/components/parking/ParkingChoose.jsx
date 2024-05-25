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


let length = 60;


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
];


const seats = Array.from({ length: length }, (_, i) => i + 1);

export default function Parkings() {

  const [selectedTime, setSelectedTime] = useState(time[0]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [apiData, setApiData] = useState(null);

  localStorage.setItem('time', selectedTime.Time)

  const location = useLocation();
  const parkingId = new URLSearchParams(location.search).get('parkingId');

  useEffect(() => {
    // Fetch the API data here (replace with your actual API endpoint)
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
      <Movies
        movie={selectedTime}
        onChange={(movie) => {
          setSelectedSlots([]);
          setSelectedTime(movie);
        }}
      />
      <ShowCase />
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Cinema
          movie={selectedTime}
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

function Movies({ movie, onChange }) {
  return (
    <>
      <div className="Movies my-3" style={{ display: 'flex', justifyContent: 'center' }}>
        <label htmlFor="movie" style={{ color: 'white' }}>Select Starting Time:</label>
        <select
          id="movie"
          value={movie.name}
          onChange={(e) => {
            onChange(time.find((movie) => movie.Time === e.target.value));
          }}
        >
          {time.map((movie) => (
            <option key={movie.Time} value={movie.Time}>
              {movie.Time}
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
        <span className="seat" /> <small>Available</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Booked</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSlots, onSelectedSlotsChange }) {


  function handleSelectedState(seat) {
    const isSelected = selectedSlots.includes(seat);
    if (isSelected) {
      onSelectedSlotsChange(
        selectedSlots.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSlotsChange([seat]);
    }
  }
  localStorage.setItem('seat', selectedSlots[0])

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSlots.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center", // Horizontally center the content
                alignItems: "center", // Vertically center the content
              }}
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                    if (e.key === "Enter") {
                      handleSelectedState(seat);
                    }
                  }
              }
            >{seat}</div>
          );
        })}
      </div>
    </div>
  );
}
