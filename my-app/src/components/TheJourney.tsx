import { useState } from "react";
import Title from "./Title";
import snowflake from '../assets/img/snowflake.png'
import song from '../assets/music/Krampus.mp3'
import '../styles/TheJourney.css'

const story = [
    <img src={snowflake} id='snowflake' alt='snowflake' onClick={() => playSong()} />,
    <Title title='> Lizzy.' />,
    'You wake up.',
    'this',
    'game'
];

const playSong = () => {
    const audio = new Audio(song);
    audio.loop = true;
    audio.play()
};

export default function Travel() {
    const [index, setIndex] = useState(Number);
    const increment = () => {
      index < 3 && setIndex(index + 1);
    };
    return (
    <div className="Journey" onClick={increment}>
        {story[index]}
    </div>
 );
}