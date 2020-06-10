import styled from 'styled-components';

export const StyledAnswer = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const StyledButton = styled.button`
  width: 50%;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0;
  border: none;
  transition-duration: 0.3s;
  margin: 25px 0;
  padding: 15px;
  &:hover {
    background: #fff;
    color: #000;
    border-radius: 50px;
  }
`;

export const StyledCard = styled.div`
  max-width: 540px;
  background: transparent;
  padding: 5px;
  border-radius: 5px;
  margin: auto;
`;

export const StyledImg = styled.img`
  max-width: 540px;
  display: block;
  margin: 0 auto;
  @media (max-width: 540px) {
    max-width: 300px;
  }
`;
