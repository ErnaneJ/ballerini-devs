import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeOut, fadeInUp } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const FadeInContent = styled.section`
  animation: .5s ${props => props.statusModal ? fadeInAnimation : fadeOutAnimation};
`;

export const FadeInUpContent = styled.section`
  animation: 1s ${fadeInUpAnimation};
`;