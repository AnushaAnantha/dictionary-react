import React, { useState } from "react";
import './Dictionary.css';

export default function DictionaryFormHandler() {

    const [searchWord, setSearchWord] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`We are searching ${searchWord}`);
       
      }

    function updateSearchWord(event){
        setSearchWord(event.target.value);
    }

    return (
        <div className="Dictionary">
        <form onSubmit={search}>
          <input type="search"  onChange={updateSearchWord} placeholder="Type your word here" autoFocus={true}/>
          <input type="submit" value="Search" />
        </form>
        </div>
    );
  }
  