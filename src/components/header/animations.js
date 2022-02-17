import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const FadeInDownContent = styled.section`
  animation: 1s ${fadeInDownAnimation};
`;