import React from "react";
import Synonyms from "./synonyms";
import './App.css';

export default function MeaningCard(props){
    return (

                       <div class="card">
                            {props.meaning.definitions.map(function(definition, index){
                                return (
                                        <div class="card-body" key={index}>
                                            <h4 class="strong">{props.meaning.partOfSpeech}</h4>
                                            <p class="card-text">
                                            <p className="strong">Definition</p>
                                            <p className="italics">
                                                {definition.definition}
                                                <br />
                                            </p>
                                            </p>
                                            <p className="strong">Example</p>
                                            <p className="italics">
                                                {definition.example}
                                            </p>
                                            <div> 
                                            <Synonyms synonyms={definition.synonyms}/>
                                            </div>
                                        </div>
                                )
                            })
                        }
                        </div>
    )
    
}