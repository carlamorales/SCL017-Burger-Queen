import React from 'react';

const Burger = (props) => {
  const { burger, add } = props;

  return (
    <div>
      <img src={burger.image} alt={burger.name}/>
      <h3>{burger.name}</h3>
      <p>${burger.price}</p>
      <div>
        <button onClick={() => add(burger)}>Agregar</button>
      </div>
    </div>
  );
}

export default Burger;
