import React, { useState } from "react";
import { Box, InputBase, Typography, styled,Button } from '@mui/material';

const Container = styled(Box)`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    & > span {
        font-size:65px;
        font-weight:700;
        color:#fff;
        & > span {
            font-size:70px;
            font-weight:700;
            color:#fff;
        }
    }
`
const InputContainer = styled(Box)`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
    & > div {
        width:50%;
    }
    & > div> input {
        text-indent:1rem;
        width: 100%;
        height:40px;
        background-color:white;
        border-radius:10px;
    }
    & > button{
        height:48px;
        width: 20%;
        font-size:24px;
        font-weight:700;
        border:none;
        background:#FFD700;
        margin-left:10px;
    }
`

const LinkShortner = ({setInputValue}) => {
    const [value, setValue] = useState('');
    const handleChange = () => {
        setInputValue(value);
        setValue('');
    }

    return (
        <>
            <Container>
                <Typography component='span'>Link <Typography component='span' style={{ color: '#FFD700' }}>Shortner</Typography></Typography>
                <InputContainer>
                    <InputBase 
                    placeholder="Paste Your Link Here"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                     />
                    <Button variant="contained" onClick={handleChange}>Start</Button>
                </InputContainer>
            </Container>
        </>
    )
}

export default LinkShortner;