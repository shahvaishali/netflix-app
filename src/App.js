import './App.css';
import List from './components/List';
import React, { useState, useEffect } from 'react'
import image from './img/NetflixLogo.png'

function App(props) {

  useEffect(() => {
    fetch('http://localhost:8000/mylist')
      .then(response => response.json())
      .then(setList)
    fetch('http://localhost:8000/recommendations')
      .then(response => response.json())
      .then(setRecommendations)
  }, [])

  const [list, setList] = useState([])
  const [recommendations, setRecommendations] = useState([])

  function removeList(movie) {
    setRecommendations([...recommendations, movie])
    const updateList = list.filter((item) => item.id !== movie.id);
    setList(updateList)
  }

  function addtoList(movie) {
    setList([...list, movie])
    const recommededList = recommendations.filter((item) => item.id !== movie.id)
    setRecommendations(recommededList)
  }

  return (
    <>
      <img src={image} alt="Netflix Logo" className="logo"></img>
      <List name="My List" list={list} handleClick={removeList} buttonText="Remove"/>
      <List name="Recommended List" list={recommendations} handleClick={addtoList} buttonText="Add" />
    </>
  );
}
export default App;
