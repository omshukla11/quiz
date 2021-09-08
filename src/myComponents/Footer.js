import React from 'react'

export default function Footer({ score, totques }) {

    return (
        <center><div className='card1'><h3>Score: {score}/{(totques) * 10}</h3></div></center>
    )
}