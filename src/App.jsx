import AnimalShow from "./AnimalShow";
import "./App.css";
import { useState } from "react";

const getRandomAnimal = () => {
  const animals = ["cat", "dog", "gator", "cow", "bird", "horse"];
  let index = Math.floor(Math.random() * animals.length);
  return animals[index];
};

const App = () => {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderAnimal = animals.map((animal, index) => (
    <AnimalShow type={animal} key={index} />
  ));
  return (
    <div className="app">
      <button className="btn" onClick={handleClick}>
        Add Animal
      </button>
      <div className="render-animals">{renderAnimal}</div>
    </div>
  );
};
export default App;
