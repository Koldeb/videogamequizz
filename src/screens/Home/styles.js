import styled from 'styled-components';

export const StyledLink = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0;
  border: none;
  transition-duration: 0.3s;
  &:hover {
    background: #fff;
    border-radius: 50px;
    a {
      color: #1d1d1d;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 22px;
    padding: 15px 15px;
    transition-duration: 0.3s;
  }
`;

export const StyledTitle = styled.p`
  color: #fff;
`;
export const StyledContainer = styled.div`
  position: absolute;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledHomePage = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
