import React from 'react';
import { StyledScore } from './styles';

const Score = props => {
  return (
    <StyledScore>
      <p>{props.score}</p>
    </StyledScore>
  );
};

export default Score;
