import Header from '../../components/header';
import Main from '../../components/Main';
import ContentLanding from './components/ContentLanding';
import './landingContent.css';

const Home = () => {
  return <>
    <Header isNotLanding={false}/>
    <Main>
      <ContentLanding/>
    </Main>
  </>;
};

export default Home; 