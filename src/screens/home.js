import React from 'react';
import Timer from '../components/Timer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1> Quizz Jeux Vidéo </h1>
      <p>
        <span>But du jeu :</span>
        <br />
        Trouver les 10 bonnes réponses des jeux présentés
      </p>
      <Link to='/quizz'>Quizz</Link>
    </>
  );
};

export default Home;
