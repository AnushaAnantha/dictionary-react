import React, { useState } from "react";
import './Dictionary.css';
import axios from "axios";
import SearchResults from "./searchResults";

export default function DictionaryFormHandler() {

    let [searchWord, setSearchWord] = useState("");
    let [responseData, setResponseData] = useState(null);

    function search(event) {
        event.preventDefault();
        let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
        axios.get(api).then(handleReponse);
       
      }

    function updateSearchWord(event){
        setSearchWord(event.target.value);
    }

    function handleReponse(response){
        setResponseData(response.data[0]);
    }

    return (
        <div className="Dictionary">
        <form onSubmit={search}>
          <input type="search"  onChange={updateSearchWord} placeholder="Type your word here" autoFocus={true}/>
          <input type="submit" value="Search" />
        </form>
        <SearchResults results={responseData}/>
        </div>
    );
  }
  