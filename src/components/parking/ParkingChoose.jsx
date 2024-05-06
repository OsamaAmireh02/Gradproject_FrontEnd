import "./parkingchoose.css";
import React, { useState } from "react";
import clsx from "clsx";
import { TypeAnimation } from "react-type-animation";

const d = new Date();
let hour = parseInt(d.getHours());
let hour1 = hour + 1;
let hour2 = hour1 + 1;
let hour3 = hour2 + 1;


const time = [
  {
    name: hour + ":00:00",
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: hour1 + ":00:00",
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: hour2 + ":00:00",
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: hour3 + ":00:00",
    occupied: [10, 12, 50, 33, 28, 47],
  },
];


const seats = Array.from({ length: 100 }, (_, i) => i);

export default function Parkings() {


  const [selectedMovie, setSelectedMovie] = useState(time[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  localStorage.setItem('time', selectedMovie.name)

  return (
    <div className="App" style={{
      'position': 'sticky',
      'height': '73vh'

    }}>
      <Movies
        movie={selectedMovie}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />

      <p className="info" style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
        You have selected Slot no. <span className="count">{selectedSeats}</span>

      </p>

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
            onChange(time.find((movie) => movie.name === e.target.value));
          }}
        >
          {time.map((movie) => (
            <option key={movie.name} value={movie.name}>
              {movie.name}
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
    <ul className="ShowCase">
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

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {


  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([seat]);
    }
  }
  localStorage.setItem('seat', selectedSeats[0])

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <span
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
            />
          );
        })}
      </div>
    </div>
  );
}
