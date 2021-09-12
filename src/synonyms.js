import React from "react";
import './App.css';

export default function Synonyms(props){
        if (props.synonyms.length !== 0){ 
        return(
            <div class="synonym">
                <p className="strong">Synonyms</p>
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
