import React, {useState, useEffect} from 'react';
import Questions from './myComponents/Questions';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';

function App() {

  const [ques, setQues] = useState([])
  const [id, setId] = useState(10)
  
  useEffect(() => {
    fetch(`https://quizapi.io/api/v1/questions?apiKey=wI9hXA8YRswCvMAXag5Cp4QGmz5OfCl2S8sfk7OX&limit=${id}`)
      .then(res => {
        return res.json()
      })
      .then ((data) => {
        setQues(data)
      })
  }, [id])



  const loading = () => {
    if (ques === null){
      return true;
    }
    return false;
  }

  

  return (
    <>
      <Header title="Quizzy" darkmode={true} searchbar={false} link1="Home" link2="About Us"/>
      <h2>Enter the number of questions you want:</h2><input type="number" value={id} onChange={ e => setId(e.target.value)} /><p>Max 20 questions</p>
      {loading?<Questions ques={ques}/>:<h3>Loadingggg....</h3>}
    </>
  );
}

export default App;
