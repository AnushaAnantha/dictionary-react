import React, { useState } from "react";
import './App.css';
import axios from "axios";
import SearchResults from "./searchResults";
import { MDBInput } from "mdbreact";

export default function DictionaryFormHandler() {

    let [searchWord, setSearchWord] = useState("");
    let [responseData, setResponseData] = useState(null);

    function search(event) {
        event.preventDefault();
        let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
        axios.get(api).then(handleReponse).catch(handleError);
       
      }

    function updateSearchWord(event){
        setSearchWord(event.target.value);
    }

    function handleReponse(response){
        setResponseData(response.data[0]);
    }

    function handleError(response){
        setResponseData(null);
    }

    return (
      <div>
        <div className="formClass">
        <form>
          <MDBInput size="sm" icon="user" hint="Search the dictionary" onChange={updateSearchWord}  autoFocus={true} />
          <button class="btn btn-primary" type="submit" onClick={search}>Search</button>
        </form>
        </div>
        <SearchResults results={responseData}/>
      </div>
    );
  }
  