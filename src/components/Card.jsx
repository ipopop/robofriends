import React from 'react';

function Card({ username, mail, id }) {
  return (
    <div className="bg-light-blue tc dib br3 pa3 ma2 grow">
      <img src={`https://robohash.org/set_set1/${id}?size=200x200`} alt="a random robot"/>
      <h2>{username}</h2>
      <span>{mail}</span>
    </div>
  );
}

export default Card;
