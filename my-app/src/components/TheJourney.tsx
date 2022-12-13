import { useState } from "react";
import Title from "./Title";
import snowflake from '../assets/img/snowflake.png'
import Krampus from '../assets/music/Krampus.mp3'
import DeckTheHalls from '../assets/music/DeckTheHalls.mp3'
import '../styles/TheJourney.css'

export default function Travel(this: any) {
    const [audio, setAudio] = useState(new Audio(Krampus));
    const [playing, setPlaying] = useState(false);
    const [index, setIndex] = useState(Number);
    const [bgColor, setBgColor] = useState('#282c34');

    const playSong = (song: any) => {
        //audio.pause()
        setAudio(new Audio(song))
        audio.loop = true;
        audio.play()
    };

    const playAndChange = ( song: string, color: string) => {
        playSong(song);
        setBgColor(color);
    }

    const increment = () => {
      //index < 3 && 
      setIndex(index + 1);
    };

    const story = [
        //onClick={() => playSong(Krampus)}
        <img src={snowflake} id='snowflake' alt='snowflake' onClick={() => playSong(DeckTheHalls)} />,
        <Title title='> Lizzy.' />,
        'You wake up.',
        'This is not the North Pole.',
        'Not anymore.',
        <><div onClick={() => playAndChange(DeckTheHalls, '#C30F16')}><Title title='> Elfward.' /></div></>,
        <><div onClick={() => playAndChange(Krampus, '#282c34')}>Yay! You're at the North Pole!!!</div></>,
        'Except Santa is missing and Christmas is ruined and everything is absolutely terrible.'
    ];
    
    return (
        <div className="App" style={{ backgroundColor: bgColor }}>
            <header className="App-header">
                <div className="journey" onClick={increment} style={{ backgroundColor: bgColor }}>
                    {story[index]}
                </div>
            </header>
     </div>
 );
}