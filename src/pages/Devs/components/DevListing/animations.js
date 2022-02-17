import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeInDown } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const FadeInUpContent = styled.div`
  width: 100%;
  animation: 1.5s ${fadeInUpAnimation};
`;
export const FadeInDownContent = styled.div`
  animation: 1.5s ${fadeInDownAnimation};
`;