import React, { useState } from 'react'

export const SingleQ = ({ singleq, score, updateScore }) => {
    let ans = []
    for (let key in singleq.answers) {
        if (singleq.answers.hasOwnProperty(key)) {
            ans.push(singleq.answers[key]);
        }
    }

    const [cor, setCor] = useState('white');

    const corclick = () => {
        setCor("green")
        updateScore()
    }
    const wrongclick = () => {
        setCor("red")
    }
    const check = (s) => {
        if (s === "white") {
            return true;
        }
        return false;
    }

    return (
        <div className="card mb-3" styles="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{singleq.question}</h4>
                        <ol type='A'>{ans.map((a) => {
                            if (a != null) {
                                let corrans = singleq.correct_answer
                                if (singleq.answers[corrans] === a) {
                                    return (check(cor) ? 
                                        <div><li><button type="button" className="btn btn-light" onClick={corclick}>{a}</button></li><br /></div> : 
                                        <div><li><button type="button" className="btn btn-success">{a}</button></li><br /></div>
                                    )
                                } else {
                                    return (check(cor) ? 
                                        <div><li><button type="button" className="btn btn-light" onClick={wrongclick}>{a}</button></li><br /></div> : 
                                        <div><li><button type="button" className="btn btn-danger">{a}</button></li><br /></div>
                                    )
                                }
                            }
                        })}</ol>
                    </div>
                </div>
            </div>
        </div>
    )
}