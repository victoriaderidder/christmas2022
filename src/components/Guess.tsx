import { Button, TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

interface GuessProps {
    setShowElement: (showList: boolean) => void;
    id: number;
}

const style = {
    "& .MuiInputLabel-root": {color: 'white'},
    "& .MuiInput-underline:not(.Mui-error):after": {
        borderBottomColor: '#00873E'
    },
    "& label.Mui-focused:not(.Mui-error)": {
        color: '#00873E'
    },
    "& .MuiFormLabel-root.Mui-error": {
        color: "#D32F2F"
    },
    "& .MuiInput-underline:not(.Mui-error):before": {
        borderBottomColor: '#00873E',
    },
    "& .MuiInput-underline:hover:not(.Mui-error):before": {
        borderBottomColor: '#00873E',
    },
    "& .MuiInput-underline:hover:not(.Mui-error):after": {
        borderBottomColor: '#00873E',
    },
   "&.MuiInput-root:hover:not(.Mui-error):before" : {
    borderBottomColor: '#00873E',
   },
    input: { color: 'white' }
  }    

const Guess: FC<GuessProps> = ({ setShowElement, id }) => {
    const [theGuess, setTheGuess] = useState('')
    const [error, setError] = useState(false);

    const handleGuess = () => {
        theGuess.toLowerCase() === 'skip' && setShowElement(false)
        id === 1 && (theGuess.toLowerCase() === 'cookie') ? setShowElement(false) : setError(true)
        id === 2 && (theGuess.toLowerCase() === 'captcha') ? setShowElement(false) : setError(true)
        id === 3 && (theGuess.toLowerCase() === 'no ellen') ? setShowElement(false) : setError(true)
        id === 4 && (theGuess.toLowerCase() === 'press to activate') ? setShowElement(false) : setError(true)
        id === 5 && (theGuess.toLowerCase() === `if you want your precious cookie back then youd better give me the thing i lack` || theGuess.toLowerCase() === `if you want your precious cookie back then you'd better give me the thing i lack`) ? setShowElement(false) : setError(true)
        id === 6 && (theGuess.toLowerCase() === 'snowglobe') ? setShowElement(false) : setError(true)
        id === 7 && (theGuess.toLowerCase() === 'christmas tree') ? setShowElement(false) : setError(true)
        id === 8 && (theGuess.toLowerCase() === 'water') ? setShowElement(false) : setError(true)
        id === 9 && (theGuess.toLowerCase() === '125') ? setShowElement(false) : setError(true)
    }

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if(e.code === "Enter") {
                handleGuess()
            }
            else {
                setError(false)
            }
        })
    })
       
    return (
        <>
        {<TextField
            id="standard"
            label="Guess"
            variant="standard"
            sx={style}
            onChange={(e) => {setTheGuess(e.target.value)}} helperText={error && 'THAT IS WRONG YOU FOOL'}
            error={error} 
        />}
        {<Button
            type="submit"
            variant="contained"
            style={{
                backgroundColor: "#00873E",
                marginLeft: "20px"
            }}
            onClick={handleGuess}>
            Guess
        </Button>}
        </>
    );
};

export default Guess;