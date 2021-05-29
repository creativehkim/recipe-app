import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';
import Header from './components/Header';
import './App.css'
import RecipeSlider from './components/RecipeSlider';




function App() {
  const APP_ID = 'd471c001';
  const APP_KEY ='22221fa23365c87c11bac2f90fc47188';
    
  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch] = useState('');
  const [ query, setQuery ] = useState('chicken')
  
  useEffect(() => {
    getRecipes()
  },[query])  // eslint-disable-next-line react-hooks/exhaustive-deps

  const getRecipes = async () => {

    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`);
    const data = await res.json();

    setRecipes(data.hits)
    console.log(data.hits)
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
        <RecipeSlider recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
