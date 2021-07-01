import React, { useState } from "react";
import "./styles.css";

const bookShelf = {
  javascript: [
    {
      name: "You Don't Know JS!",
      rating: "4/5"
    },
    {
      name: "Eloquent JS",
      rating: "5/5"
    }
  ],
  fiction: [
    {
      name: "Harry Potter and the Deathly Hallows",
      rating: "4.5/5"
    },
    {
      name: "The Adventures of Sherlock Holmes",
      rating: "5/5"
    }
  ],
  business: [
    {
      name: "Pyjama Profit",
      rating: "4/5"
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "4.5/5"
    }
  ]
};

var books = Object.keys(bookShelf);

export default function App() {
  const [genre, setGenre] = useState("javascript");

  function bookClickHandler(genre) {
    // processing
    console.log(genre);
    setGenre(genre); // react call to show output
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="bookshelf">
          📚
        </span>{" "}
        bookshelf
      </h1>
      <p>explore your genre.</p>
      {/* Actual output set by React using useState */}

      {books.map((genre) => {
        return (
          <button
            onClick={() => bookClickHandler(genre)}
            key={genre}
            style={{
              cursor: "pointer",
              background: "rgb(229, 231, 235)",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        );
      })}

      <hr />

      <ul style={{ paddingInlineStart: "0px", textAlign: "left" }}>
        {bookShelf[genre].map((book) => {
          return (
            <li
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                margin: "1rem 0rem",
                fontSize: "larger"
              }}
              key={book.name}
            >
              <div>{book.name}</div>
              <div>{book.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
