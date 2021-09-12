import React from "react";
import MeaningCard from "./meaning";
import "./App.css";

export default function SearchResults(props){
    console.log(props);
    if (props.results){
        return(
            <div className="SearchResults">
                <div class="container">
                    <div class="span12">
                    <div class="card border-light mb-3">
                        <div class="card-body">
                            <h5 class="card-title">{props.results.word}</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                        {props.results.meanings.map(function(meaning, index){
                            return (
                            <MeaningCard meaning={meaning}/>
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
