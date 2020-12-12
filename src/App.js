import React, { useState } from "react";
import "./styles.css";
const bookDatabase = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],
  css: [
    { name: "CSS: A Definative Guide", rating: "4/5" },
    { name: "CSS: The Missing Manual", rating: "3.5/5" }
  ],

  mythology: [
    {
      name: "Sita: The warrior of Mithila",
      rating: "5/5"
    },
    {
      name: "Jaya",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Rich Dad Poor Dad",
      rating: "4.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("mythology");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Book Reccomendation</h1>
      <div>
        {Object.keys(bookDatabase).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem",
              border: "1px solid",
              margin: "0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDatabase[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid",
                width: "20%",
                margin: "1rem",
                borderRadius: "0.5rem"
              }}
            >
              <div> {book.name} </div>
              <div> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
