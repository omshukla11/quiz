import React, { useState } from 'react'
import Options from './Options';

export const SingleQ = ({ singleq, updateScore, index }) => {
    let ans = []
    for (let key in singleq.answers) {
        if (singleq.answers.hasOwnProperty(key)) {
            ans.push(singleq.answers[key]);
        }
    }

    return (
        <center><div className="card1 mb-3" styles="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{index+1}. {singleq.question}</h4>
                        <ol type='A'>{ans.map((a) => {
                            if (a != null) {
                                let corrans = singleq.correct_answer
                                return <Options corans={corrans} singleq={singleq} option={a} updateScore={updateScore}/>
                            }
                        })}</ol>
                    </div>
                </div>
            </div>
        </div></center>
    )
}