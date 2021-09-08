import React, { useState, useEffect } from 'react';
import Questions from './myComponents/Questions';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import axios from 'axios';

function App() {

  const [ques, setQues] = useState([])
  const [no, setNo] = useState(10)
  const [lvl, setLvl] = useState('')
  const [cat, setCat] = useState('')
  const categories = ['any', 'Linux', 'BASH', 'PHP', 'Docker', 'HTML', 'MySQL', 'WordPress', 'Laravel', 'Kubernetes', 'JavaScript', 'DevOps']

  useEffect(() => {
    // fetch(`https://quizapi.io/api/v1/questions?apiKey=wI9hXA8YRswCvMAXag5Cp4QGmz5OfCl2S8sfk7OX&category=${cat}&difficulty=${lvl}&limit=${no}`)
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then((data) => {
    //     setQues(data)
    //   })
    axios.get(`https://quizapi.io/api/v1/questions?apiKey=wI9hXA8YRswCvMAXag5Cp4QGmz5OfCl2S8sfk7OX&difficulty=${lvl}&limit=${no}&category=${cat}`)
      .then(res => {
        setQues(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [no, lvl, cat])



  const loading = () => {
    if (ques === null) {
      return true;
    }
    return false;
  }

  return (
    <div className='app'>
      <center><div className='card1'><div data-tip="Max 20 questions">Select Topic to answer questions on that topic:<br /><select aria-label="Default select example" onChange={e => setCat(e.target.value)}>
        {categories.map((c) => {
          if (c === 'any') {
            return <option value=''>Any Category</option>
          }
          return <option value={c}>{c}</option>
        })}
      </select></div><div><label>Select a Difficulty level:</label>
        <br /><select aria-label="Default select example" onChange={s => setLvl(s.target.value)}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select><br/></div>
        <div>Enter the number of questions you want:<br /><select aria-label="Default select example" onChange={e => setNo(e.target.value)}>
          {[...Array(21).keys()].map((i) => {
            if (i != 0) {
              return <option value={i}>{i}</option>
            }
          })}
        </select></div></div></center>
      {loading ? <Questions ques={ques} totques={ques.length} /> : <h3>Loadingggg....</h3>}
    </div>
  );
}

export default App;
