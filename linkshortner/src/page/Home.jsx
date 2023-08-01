import React, { useState } from 'react'
import LinkShortner from '../component/LinkShortner';
import LinkResult from '../component/LinkResult';
import BackgroundAnimate from '../component/BackgroundAnimate';
import { Box, styled} from '@mui/material';

const Contain = styled(Box)`
    height:80vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Home = () => {

  const [inputValue, setInputValue] = useState('');

  return (
    <Contain>
        <LinkShortner setInputValue={setInputValue}/>
        <BackgroundAnimate/>
        <LinkResult inputValue={inputValue}/>
    </Contain>
  )
}

export default Home;