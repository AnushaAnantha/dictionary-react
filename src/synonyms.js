import React from "react";
import './App.css';

export default function Synonyms(props){
    console.log(props.synonyms);
        if (props.synonyms){ 
        return(
            <div class="synonym">
                {props.synonyms.map(function(synonym, index){
                    return (
                    <span class="badge" key={index}>
                        {synonym}
                    </span>
                    )
                })}
            </div>
        )
        }
        else{
            return null;
        }
    }
