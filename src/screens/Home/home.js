import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledTitle,
  StyledLink,
  StyledContainer,
  StyledHomePage
} from './styles';

const Home = props => {
  return (
    <StyledContainer>
      <StyledHomePage>
        <StyledTitle> Quizz Jeux Vidéo </StyledTitle>
        <StyledTitle>
          <span>But du jeu :</span>
          <br />
          Trouver les 10 bonnes réponses des jeux présentés Attention, si vous
          donnez la mauvaise réponse vous perdez des points :)
        </StyledTitle>
      </StyledHomePage>
      <StyledLink>
        <Link to='/quizz'>Vers le Quizz</Link>
      </StyledLink>
    </StyledContainer>
  );
};

export default Home;
