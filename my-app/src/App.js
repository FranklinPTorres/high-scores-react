// import logo from './logo.svg';
import React from 'react';
import HighScoreTable from './HighScoreTable'
import allCountryScores from "./scores";
import "./App.css";

function App() {
  return <HighScoreTable scores={allCountryScores} />;
}

export default App;