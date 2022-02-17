import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeInDown, fadeIn } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInAnimation = keyframes`${fadeIn}`;

export const FadeInUpContent = styled.div`
  width: 100%;
  animation: 1.5s ${fadeInUpAnimation};
`;
export const FadeInDownContent = styled.div`
  animation: 1.5s ${fadeInDownAnimation};
`;
export const FadeInContent = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;