import React, {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [quote,setQuotes] = useState('');
  const getQuoted = () => {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(`${data.content} —${data.author}`);
      setQuotes(data)
    })
  };
useEffect(()=>{
  getQuoted();
},[])

  return (
    <div className="App">
      <div className="quote">
        <p>{quote.content}</p>
        <p>Author: {quote.author}</p>
        <div className="btncontainer">
          <button onClick={getQuoted} className="btn">Get quote</button>
          <a href={`https://twitter.com/intent/tweet?text=${quote.content}`} target="_blank"  className="btn">Tweet</a>
        </div>
      </div>
    </div>
  );
}
export default App;
