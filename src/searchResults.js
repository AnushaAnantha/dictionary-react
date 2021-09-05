import React from "react";
import MeaningCard from "./meaning";

export default function SearchResults(props){
    if (props.results){
        return(
            <div className="SearchResults">
                <h2>{props.results.word}</h2>
                {props.results.meanings.map(function(meaning, index){
                    
                    return (
                        <div key={index}>
                    <MeaningCard meaning={meaning}/>
                    </div>
                    )
                })
                }
            </div>
            )
    }else{
        return null;
    }

};
