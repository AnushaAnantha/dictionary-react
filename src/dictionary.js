import React, { useState } from "react";
import './App.css';
import axios from "axios";
import SearchResults from "./searchResults";
import { MDBInput } from "mdbreact";
import ImageSearch from "./imagesearch";

export default function DictionaryFormHandler() {

    let [searchWord, setSearchWord] = useState(null);
    let [responseData, setResponseData] = useState(null);
    let [imageData, setImageData] = useState(null);


    function search() {
        console.log(searchWord);
        let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
        axios.get(api).then(handleReponse).catch(handleError);
       
      }
    

    function handleSubmit(event){
      event.preventDefault();
      search();
    }

    function updateSearchWord(event){
      setSearchWord(event.target.value);
    }

    function handleReponse(response){
        setResponseData(response.data[0]);
        fetchPhotos();

    }

    function fetchPhotos(){
        let pexelsApi = `https://api.pexels.com/v1/search?query=${searchWord}`;
        let pexelsApiKey = '563492ad6f917000010000017cf519ccf1094ded893679f2abf892c3';
        axios.get(pexelsApi, {headers: {authorization: pexelsApiKey}}).then(handlePexelsReponse).catch(handleError);
    }

    function handlePexelsReponse(response){
      setImageData(response);
    }

    function handleError(response){
        setResponseData(null);
    }

    return (
      <div>
        <div className="formClass">
        <form>
          <MDBInput size="sm" icon="user" hint="Search the dictionary" onChange={updateSearchWord} autoFocus={true} />
          <button class="btn btn-primary" type="submit" onClick={handleSubmit}>Search</button>
        </form>
        </div>
        <SearchResults results={responseData}/>
        <ImageSearch photosData={imageData}/>
      </div>
    );
    }
  