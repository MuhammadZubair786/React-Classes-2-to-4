import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [persons, setperson] = useState([])
  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=$now.year-$now.month-$now.day&sortBy=publishedAt&apiKey=1866ed19591c4d99880992a3ca614497')
      .then(snap => {
        const person = snap.data['articles'];
        console.log(person)
        person.map((v, i) => {
          console.log(v)
            
          setperson([...person, v])
          

        })
       
      }) .catch((err)=>{
        console.log(err)
      })

  }, [])
  console.log(persons)

  return (
    <div>
      <ul>
        {persons.map((v, i) => <li key={i}>
          <img src={v.urlToImage} width='100' height='100'/>
          <b>  {v.id}</b>
          <b>  {v.title}</b>
          </li>)}
      </ul>
    </div>
  )
}
export default App;
