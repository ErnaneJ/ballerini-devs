import { rubberBand } from 'react-animations';
import { FadeInContent } from './animations';

const Loading = ({status, bg}) => {
  return <>
    {status ?
      <FadeInContent className="loader-container" style={{backgroundColor: `${bg ? 'rgba(0, 0, 0, .5)' : ''}`}}>
        <div className="box-loader">
          <div className="rond first"></div>
          <div className="rond second"></div>
        </div>
      </FadeInContent>
  : '' }</>;
};

export default Loading;