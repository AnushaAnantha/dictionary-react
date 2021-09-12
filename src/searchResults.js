import React from "react";
import MeaningCard from "./meaning";
import "./App.css";
import Phonetic from "./phonetic";

export default function SearchResults(props){
    console.log(props);
    if (props.results){
        return(
            <div className="SearchResults">
                <div class="container">
                    <div class="span12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{props.results.word}</h5>
                            {props.results.phonetics.map(function(phonetic, index){
                                return(
                                    <Phonetic phonetic={phonetic} key={index}/>
                                )
                            })} 
                            <p class="card-text"></p>
                        </div>
                    </div>
                        {props.results.meanings.map(function(meaning, index){
                            return (
                            <MeaningCard meaning={meaning} key={index}/>
                            )
                        })
                        }
                   </div>
                   
                </div>
            
                
            </div>
            )
    }else{
        return null;
    }

};
