import React from "react";
import Synonyms from "./synonyms";
import './App.css';

export default function MeaningCard(props){
    return (

                       <div class="card border-light mb-3">
                            {props.meaning.definitions.map(function(definition, index){
                                return (
                                        <div class="card-body" key={index}>
                                            <h4 class="strong">{props.meaning.partOfSpeech}</h4>
                                            <p class="card-text">
                                                <b>Definition - </b> {definition.definition}
                                                <br />
                                              </p>
                                            <p className="strong">Example</p>
                                            <p className="italics">
                                                {definition.example}
                                            </p>
                                            <div className="italics"> 
                                            <Synonyms synonyms={definition.synonyms}/>
                                            </div>
                                        </div>
                                )
                            })
                        }
                        </div>
    )
    
}