import { useEffect, useState } from "react";
import Title from "./Title";
import snowflake from '../assets/img/snowflake.png'
import Krampus from '../assets/music/Krampus.mp3'
import DeckTheHalls from '../assets/music/DeckTheHalls.mp3'
import Circus from '../assets/music/circus.mp3'
import '../styles/TheJourney.css'
import CookieClicker from "./CookieClicker";

export default function Travel(this: any) {
    const [audio, setAudio] = useState(new Audio(Krampus));
    const [index, setIndex] = useState(Number);
    const [bgColor, setBgColor] = useState('#282c34');
    //const [showArrow, setShowArrow] = useState(false)
    const [showCookie, setShowCookie] = useState(false)
    let [cookieCounter, setCookieCounter] = useState(0)

    const playSong = (song: any) => {
        audio.pause()
        setAudio(new Audio(song))
        audio.loop = true;
    };

    useEffect(() => {
        audio.paused ? audio.play() : audio.pause();
        return () => audio.pause();
      }, [audio]);

    const playAndChange = ( song: string, color: string) => {
        playSong(song);
        setBgColor(color);
    }

    const playAndShow = (song: string) => {
        //showArrow === true ? setShowArrow(false) : setShowArrow(true);
        playSong(song);
    }

    const increment = () => {
      //index < 3 && 
      setIndex(index + 1);
    };

    const startCookie = () => {
        setShowCookie(true)
        playSong(Circus)
    }

    const cookieIncrement = () => {
        setCookieCounter(cookieCounter + 1)
        cookieCounter === 9 && setShowCookie(false)
    }

    const story = [
        <img src={snowflake} id='snowflake' alt='snowflake' onClick={() => playSong(Krampus)} />,

        <Title title='> Lizzy.' />,
        'You wake up.',
        'This is not the North Pole.',
        'Not anymore.',
        'It\'s dark and you\'re disoriented.',
        'You try to remember how you got here.',
        'You\'d been getting ready for your first ever Christmas as Santa.',
        'It was late at night.',
        'You\'d gone out to check on the reindeer.',
        'Comet had seemed nervous and upset.',
        'You remember trying to soothe him...',
        '...',
        '......',
        '..............................',
        '...And then what?',
        'Your head really hurts...',
        'Suddenly, across the room, a door bursts open!',
        'Light floods the room...',

        <><div onClick={() => playAndChange(DeckTheHalls, '#C30F16')}><Title title='> Elfward.' /></div></>,
        <><div onClick={() => playAndChange(Krampus, '#282c34')}>Yay! You're at the North Pole!!!</div></>,
        'Except Santa is missing and Christmas is ruined and everything is absolutely terrible.',
        'This should be the most magical time of the year.',
        'You\'ve barely left the new Santa\'s side since she started.',
        'Everybody is absolutely losing it.',
        'YOU ARE ALSO LOSING IT!!!!!!',
        '...But as head elf, you need to keep it together.',
        'After all, if you don\'t, then who will?',
        'Will?',
        'Will...',
        'Is nowhere to be found.',
        'Great.',

        <Title title='> GoodWill Toward Men.' />,
        '(Your friends call you Will.)',
        'You are not exactly the head elf, but you tend to get shit done.',
        'You\'ve, um, "questioned" every single elf in the workshop.',
        'Some would say interrogated, but those people need to stuff it.',
        'SANTA IS MISSING THIS IS AN EMERGENCY',
        'Anyway, one of your victims...',
        '...uh, one of the elves...',
        '...mentioned seeing Santa heading towards the stables before she disappeared.',
        'You are leaving no stone unturned.',
        'And no pile of reindeer dung unturned either!',
        'You\'re shoveling through every single pile of crap in this stable.',
        'You\'re pretty sure this dedication will pay off at the next head elf election.',
        '(You lost the last one due to politics and people being generally terrified of you.)',
        'Anyway, you\'re digging, and digging, and digging.',
        'Something shiny catches your eye...',


        'You\'ve forgotten a lot.',
        'Your memory is in tatters.',
        'But do you remember...',
        <><div onClick={startCookie}>How to count to 1000?</div></>,
        'Maybe we should keep the fun music for a bit?',
        'After all, we need something to cheer us up...',
        'No?',
        'Fine.',
        'You\'re the Grinchiest Santa I\'ve ever met.',
        <><div onClick={() => playSong(Krampus)}>Maybe the elves wanted you gone...</div></>,

        <Title title='> Will.' />,
        <Title title='> WILL.' />,
        <Title title='> GoodWill Toward Men?' />,
        'Wow. Are we not friends?',

    ];

    return (
        <div className="App" style={{ backgroundColor: bgColor }}>
            <header className="App-header">
                <div className="journey" onClick={increment} style={{ backgroundColor: bgColor }}>
                    {!showCookie && story[index]}
                    {/* <p>{(showArrow && !showCookie) && '==>'}</p> */}
                </div>
                <div className="cookie" onClick={cookieIncrement}>
                    {showCookie && <CookieClicker />}
                </div>
                <p>{showCookie && cookieCounter }</p>
            </header>
     </div>
 );
}