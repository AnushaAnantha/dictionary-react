import React from "react";
import './App.css';

export default function MeaningCard(props){
    return (
        <div className="meaning">
                        <div className="row">
                            <h4>{props.meaning.partOfSpeech}</h4>
                            {props.meaning.definitions.map(function(definition, index){
                                return (
                                    <div className="definition" key={index}>
                                            <p>
                                                <b>Definition - </b> {definition.definition}
                                                <br />
                                              </p>
                                            <p className="italics">
                                               Example - {definition.example}
                                            </p>
                                    </div>
                                )
                            })
                        }
                            

                        </div>
        </div>
    )
    
}