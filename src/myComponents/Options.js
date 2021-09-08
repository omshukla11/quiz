import React, { useState } from 'react'

const Options = ({ corans, singleq, option, updateScore }) => {

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
    const checkans = () => {
        if (singleq.answers ? singleq.answers[corans] === option : false) {
            return true
        }
        return false
    }
    return (
        <>{checkans() ? check(cor) ?
            <div><li><button type="button" className="btn card1" onClick={corclick}>{option}</button></li><br /></div> :
            <div><li><button type="button" className="btn btn-success">{option}</button></li><br /></div>
            : check(cor) ?
                <div><li><button type="button" className="btn card1" onClick={wrongclick}>{option}</button></li><br /></div> :
                <div><li><button type="button" className="btn btn-danger">{option}</button></li><br /></div>
        }</>
    )
}

export default Options
