import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState(() => {try {const saved=JSON.parse(localStorage.getItem("saved-movies"));return Array.isArray(saved)?saved.filter(m=>m&&typeof m.title==="string"&&Array.isArray(m.stars)):[];}catch{return [];}});

  useEffect(()=>{try {localStorage.setItem("saved-movies",JSON.stringify(savedList));}catch{}},[savedList]);
  const addToSavedList = movie => {
    setSavedList(list=>list.some(m=>m.id===movie.id)?list:[...list,movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
    </>
  );
};

export default App;
