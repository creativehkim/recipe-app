import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';
import './App.css'
import Header from './components/Header';


function App() {
  const APP_ID = 'd471c001';
  const APP_KEY ='22221fa23365c87c11bac2f90fc47188';
    
  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch] = useState('');
  const [ query, setQuery ] = useState('chicken')
  
  useEffect(() => {
    getRecipes()
  },[query])  // eslint-disable-next-line react-hooks/exhaustive-deps

  const getRecipes = async (e) => {
    e.preventDefault();
    
        const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
    

    const res = await fetch(URL);
    const data = await res.json();

    console.log(data.hits);
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Header 
          getSearch={getSearch} 
          onChange={updateSearch}
        />
        {recipes.map((recipe) => (
          <Recipe
            key={Date.now()}
            title={recipe.recipe.label}
            img={recipe.recipe.image}
            calories={recipe.recipe.calories.toFixed(2)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
