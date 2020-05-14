import React, { useState, useEffect } from 'react';
import axios from 'axios';
import games from './api/games';
import { StyledButton, StyledImg } from './styles';

const GetVideogames = () => {
  const [videoGame, setvideoGame] = useState([]);

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
    answer === videoGame.name
      ? alert(answer)
      : alert(`La bonne réponse était ${videoGame.name}`);
  };
  const shuffleButton = () => {
    const buttonArray = [
      <StyledButton key='0' onClick={() => handleClickAnswer(videoGame.name)}>
        {videoGame.name}
      </StyledButton>,
      <StyledButton key='1' onClick={() => handleClickAnswer(getRandomName())}>
        {getRandomName()}
      </StyledButton>,
      <StyledButton key='2' onClick={() => handleClickAnswer(getRandomName())}>
        {getRandomName()}
      </StyledButton>,
      <StyledButton key='3' onClick={() => handleClickAnswer(getRandomName())}>
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
          console.log(response.data);
          return response.data;
        })
        .catch(err => {
          console.error(err);
        });
      setvideoGame(res);
      console.log(res);
    }
    fetchData();
  }, []);
  return (
    <>
      <div>Get Video Games</div>
      <StyledImg
        src={videoGame.background_image}
        alt={`${videoGame.description}`}
      />
      {shuffleButton()}
    </>
  );
};

export default GetVideogames;
