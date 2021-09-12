import React from "react";
import './App.css';

export default function Phonetic(props){
        if (props.phonetic.audio){
        return(
                <div class="container">
                    <a class="badge listen-color" href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
                    {props.phonetic.text}
                </div>
        )
    }
    else{
        return(
            <div className="container">
                {props.phonetic.text}
            </div>
        )
    }
}
        