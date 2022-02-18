import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const FadeInContent = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;