import React, { useState, useEffect } from 'react';
import axios from 'axios';
import games from './api/games';
import { StyledButton, StyledImg, StyledAnswer, StyledCard } from './styles';
import Score from '../Score';

const GetVideogames = () => {
  const [videoGame, setvideoGame] = useState([]);
  let [score, setScore] = useState(0);

  let randomNumber = 1;
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
  };
  getRandomInt(1, 600);

  let id = Math.floor(Math.random() * randomNumber);
  id = id === 0 ? (id = Math.floor(Math.random() * randomNumber)) : id;

  const getRandomName = () => {
    return games[getRandomInt(0, games.length)].title;
  };

  const handleClickAnswer = answer => {
    answer = answer === videoGame.name ? true : false;
    if (answer === true) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const shuffleButton = () => {
    const buttonArray = [
      <StyledButton
        // background-color={bgcolor}
        key='0'
        onClick={() => handleClickAnswer(videoGame.name)}
      >
        {videoGame.name}
      </StyledButton>,
      <StyledButton
        // background-color={bgcolor}
        key='1'
        onClick={() => handleClickAnswer(getRandomName())}
      >
        {getRandomName()}
      </StyledButton>,
      <StyledButton
        // background-color={bgcolor}
        key='2'
        onClick={() => handleClickAnswer(getRandomName())}
      >
        {getRandomName()}
      </StyledButton>,
      <StyledButton
        // background-color={bgcolor}
        key='3'
        onClick={() => handleClickAnswer(getRandomName())}
      >
        {getRandomName()}
      </StyledButton>
    ];
    return buttonArray.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios({
        method: 'GET',
        url: `https://api.rawg.io/api/games/${id}`,
        headers: {
          'User-Agent': 'videoGameQuizz'
        }
      })
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.error(err);
        });
      setvideoGame(res);
    }
    fetchData();
  }, [score]);

  return (
    <>
      <Score score={score} />
      <StyledCard>
        <StyledImg
          src={videoGame.background_image}
          alt={`T'auras pas la réponse en regardant les alt :)`}
        />
        <StyledAnswer>{shuffleButton()}</StyledAnswer>
      </StyledCard>
    </>
  );
};

export default GetVideogames;
