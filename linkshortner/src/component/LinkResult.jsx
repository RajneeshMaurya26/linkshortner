import { Box, Typography,styled,Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';

const Copy = styled(Box)`
  width:100%; 
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:20px;
  & > div { 
    background:#fff;
    border-radius:10px;
  }
  & > button {
        height:48px;
        font-size:14px;
        font-weight:700;
        border:none;
        background:#FFD700;
        margin-left:10px;
  }
`

const LinkResult = ({inputValue}) => {
  const [shortLink,setShortLink] = useState('');
  const [copied, setCopied] = useState(false);

  const FetchData = async() => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortLink(res.data.result.full_short_link2);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(inputValue.length){
      FetchData();
    }
  },[inputValue]);


  return (
    <>
    {
      shortLink && (<Copy>
        <TextField value={shortLink}></TextField>
        <CopyToClipboard
          text={shortLink}
          onCopy = {() => setCopied(true)}
        >
          <Button variant="contained" >Copy to Clipboard</Button>
          </CopyToClipboard>
        </Copy>
      )
    }
      
    </>
  )
}

export default LinkResult;