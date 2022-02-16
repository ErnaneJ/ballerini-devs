import styled, { keyframes } from 'styled-components';
import { fadeInUp, pulse } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const pulseAnimation = keyframes`${pulse}`;

export const FadeInTitle = styled.div`
  animation: 1s ${fadeInUpAnimation};
`;
export const FadeInDescription= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1.5s ${fadeInUpAnimation};
`;
export const FadeInButton = styled.div`
  opacity: ${props => props.showButton ? '1' : '0'};
  transition: all ease 2s;
  animation: 2.5s ${pulseAnimation} infinite;
`;