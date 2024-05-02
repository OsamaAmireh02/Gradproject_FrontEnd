import "./parkingchoose.css";
import React, { useState } from "react";
import clsx from "clsx";

const d = new Date();
let hour = parseInt(d.getHours());
let hourr = hour + 1;

const time = [
  {
    name: hour + ":00 - " + hourr + ":00",
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: "Joker",
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: "Toy story",
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: "the lion king",
    occupied: [10, 12, 50, 33, 28, 47],
  },
];

const modifiedTime = [];

for (let i = 0; i < time.length; i++) {
  const currentElement = time[i];
  const nextElement = time[(i + 1) % time.length]; // Wrap around to the first element if needed

  // Create new elements with names based on current hour and next hour
  modifiedTime.push({
    name: `${hour}:00 - ${hourr}:00`,
    occupied: currentElement.occupied,
  });

  modifiedTime.push({
    name: `${hourr}:00 - ${(hourr + 1) % 24}:00`, // Wrap around to 0 if needed
    occupied: nextElement.occupied,
  });

  // Update hour and hourr for the next iteration
  hourr = (hourr + 1) % 24; // Wrap around to 0 if needed
  hour = (hour + 1) % 24; // Wrap around to 0 if needed
}


const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function Parkings() {

  
  const [selectedMovie, setSelectedMovie] = useState(modifiedTime[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  localStorage.setItem('time', selectedMovie.name)

  return (
    <div className="App">
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

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{" "}
        seats for the price of{" "}
        <span className="total">
          {selectedSeats.length}
        </span>
      </p>
    </div>
  );
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Select Time</label>
      <select
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(modifiedTime.find((movie) => movie.name === e.target.value));
        }}
      >
        {modifiedTime.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
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
