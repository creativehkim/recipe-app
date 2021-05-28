import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Recipe from './components/Recipe';


function App() {
  const APP_ID = 'd471c001';
  const APP_KEY ='22221fa23365c87c11bac2f90fc47188';
  
  
  const[ recipes, setRecipes ] = useState([]);
  
  // useEffect(() => {
  //   getRecipes()
  // },[])
  
  
  const getRecipes = async (e) => {
    
    const recipeName = e.target.elements.recipeName.value;
    const URL = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
    
    e.preventDefault();

    const res = await fetch(URL);
    const data = await res.json();

    console.log(data);
    setRecipes(data.hits)
  }

  

  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='App-title'>Recipe Search</h1>
      </header>
      <Form getRecipes={getRecipes}/>
      {recipes.map((recipe) => (
        <Recipe 
          title={recipe.recipe.label}
          img={recipe.recipe.image}
          calories={recipe.recipe.calories.toFixed(2)}
        />
      ))}
    </div>
  );
}

export default App;
