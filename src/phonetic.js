import React from "react";
import './App.css';
import {BsVolumeUpFill} from "react-icons/bs";

export default function Phonetic(props){
        if (props.phonetic.audio){
        return(
            <div className="phonetic">
                <span >
                    <a href={props.phonetic.audio} target="_blank" rel="noreferrer" > <BsVolumeUpFill /></a>
                    <p>{props.phonetic.text}</p>
                </span>
            </div>
        )
    }
    else{
        return(
            <div className="phonetic">
                <span >
                    <p>{props.phonetic.text}</p>
                </span>
            </div>
        )
    }
}
        