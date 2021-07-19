import Card from './Card';
import React from 'react'

export default function List(props) {
  /*
    props : {
      name: <str>
      buttonText: <str>
      list: <arr>
      handleClick: fn(event)
    }
  */

  function changeList(movie) {
    props.handleClick(movie)
  }
  
  return (
    <div className="container">
      <h2 className="title">{props.name}</h2>
      <div className="row">
        {
          props.list.map((movie) =>
            <Card movie={movie} key={movie.id} btnClick={changeList} buttonText={props.buttonText}/>
          )
        }
      </div>
    </div>
  );
}