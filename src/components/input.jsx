import React, { useState } from "react";
import Items from "./items";

export default function Input() {
  const [text, newText] = useState();
  const [items, newItems] = useState([]);
  function alertme(event) {
    newText(event.target.value);
  }
  function postMe() {
    newItems((prev) => {
      return [...prev, text];
    });
    newText("");
  }
  return (
    <div>
      <h1> Note Taking App</h1>
      <textarea
        required
        style={{
          margin: "20px",
          padding: "10px",
          width: "60%",
          height: "100%"
        }}
        onChange={alertme}
      />
      <button
        style={{
          margin: "20px",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: "orange"
        }}
        onClick={postMe}
      >
        Add a Note
      </button>
      <ul>
        {items.map(function (item) {
          return <Items item={item} />;
        })}
      </ul>
    </div>
  );
}
