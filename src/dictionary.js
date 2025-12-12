import React from "react";
import "./dictionary.css";

export default function dictionary() {
    function search(event) {
        event.preventDefault();
        alert("Searching");
    }

  return (
    <div className="dictionary">
    <form onSubmit={search}>
    <input type="search" autoFocus={true}/>
    </form>
      
    </div>
  );
}