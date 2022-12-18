import { useEffect, useState } from "react";
import Title from "./Title";
import Story from "./Story";
import snowflake from '../assets/img/snowflake.png'
import Krampus from '../assets/music/Krampus.mp3'
import DeckTheHalls from '../assets/music/DeckTheHalls.mp3'
import Circus from '../assets/music/circus.mp3'
import '../styles/TheJourney.css'
import CookieClicker from "./CookieClicker";
import ShoppingList from "./ShoppingList";

export default function Travel(this: any) {
    const [audio, setAudio] = useState(new Audio(Krampus));
    const [index, setIndex] = useState(Number);
    const [bgColor, setBgColor] = useState('#282c34');
    const [showCookie, setShowCookie] = useState(false)
    const [showList, setShowList] = useState(false)
    let [cookieCounter, setCookieCounter] = useState(0)

    const playSong = (song: any) => {
        audio.pause()
        setAudio(new Audio(song))
    };

    useEffect(() => {
        audio.paused ? audio.play() : audio.pause();
        audio.loop = true;
        return () => audio.pause();
      }, [audio]);

    const playAndChange = ( song: string, color: string) => {
        playSong(song);
        setBgColor(color);
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
        'Up until two days ago, you were busy helping Santa get ready for her first Christmas!',
        'You\'d barely left the new Santa\'s side since she started.',
        'You were so excited to help bring joy to children everywhere!',
        'And now...and now...',
        'Oh, woe! It is simply too terrible to speak of!',
        'Anyway, the workshop is in crisis.',
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

        <Title title='> Lizzy.' />,
        <Story story='A shadowy figure stands in the doorway.'/>,
        <Story story={`"So. You're finally awake."`} />,
        <Story story='The figure comes into view...'/>,
        <Story story={`He looks familiar, but you can\'t quite place him.`}/>,
        <Story story={`"Where am I?" you ask.`} />,
        <Story story={`"Don't worry about that," he says.`}/>,
        <Story story={`Yet, somehow, you are worried about that. Strange.`}/>,
        <Story story={`"Why have you brought me here?" you ask.`}/>,
        <Story story={`"You know why you're here."`}/>,
        <Story story={`Wow. This guy is just the worst.`}/>,
        <Story story={`"Refresh my memory?"`}/>,
        <Story story={`He slams his hand against the wall.`}/>,
        <Story story={`"You killed my father!"`}/>,
        <Story story='What? You did not.'/>,
        <Story story={`"You're wearing his coat!"`}/>,
        <Story story={`And that's when you realize how you know him...`}/>,
        <Story story={`"Charlie?" you ask incredulously.`}/>,
        <Story story={`Yep. It's Charlie Calvin. Like from The Santa Clause.`}/>,
        <Story story={`He's a couple of decades older, but it\'s definitely him.`}/>,
        <Story story={`"It's Charles now," he says.`}/>,
        <Story story={`"I didn't kill your father," you say. "There was this robot — "`}/>,
        <Story story={`Charles does not believe your frankly ridiculous story.`}/>,
        <Story story={`"I was always supposed to be the next Santa," he says.`}/>,
        <Story story={`"That coat you're wearing belongs to me."`}/>,
        <Story story={`For some mysterious reason, you just don't feel this guy would make a great Santa.`}/>,
        <Story story={`Luckily, you know that for the Santa Clause to activate, the coat can't be taken by force.`}/>,
        <Story story={`You'd have to willingly give it to him, and there's no way you're going to do that...`}/>,
        <Story story={`"That's fine," he says. "I can be patient."`}/>,
        <Story story={`And with that, he leaves, closing the door behind him.`}/>,
        <Story story={`You are once again alone in the dark.`}/>,

        <Title title='> Elfward.' />,
        <Story story={`You sit miserably at your desk.`} />,
        <Story story={`You've called everyone you can think to call.`} />,
        <Story story={`You've looked everywhere you can think to look.`} />,
        <Story story={`Christmas Eve is tomorrow, and Santa is nowhere to be found.`} />,
        <Story story={`Of course there is no one who can replace Santa.`} />,
        <Story story={`NO ONE!`} />,
        <Story story={`But...`} />,
        <Story story={`The previous Santa's kid knows everything there is to know about being Santa.`} />,
        <Story story={`You might have to see if he can fill in.`} />,
        <Story story={`Also you would have to make sure nobody finds out about this.`} />,
        <Story story={`It would probably ruin Christmas or something.`} />,
        <Story story={`But you are getting super desperate.`} />,
        <Story story={`Something on Santa's desk catches your eye.`} />,
        <Story story={`It's...a shopping list?`} />,
        <><div onClick={() => setShowList(true)}><Story story={`That's weird. Santa doesn't shop...`} /></div></>,
        <Story story={`Hmmm. Santa's magic cookie.`} />,
        <Story story={`It can always get Santa home again.`} />,
        <Story story={`Which means she must not have it with her...`} />,
        <Story story={`Or it was taken from her.`} />,
        <Story story={`You stand up quickly.`} />,
        <Story story={`You need to find that cookie.`} />,

        <Title title='> Will.' />,
        <Title title='> WILL.' />,
        <Title title='> GoodWill Toward Men?' />,
        'Wow. Are we not friends?',

        // 'You\'ve forgotten a lot.',
        // 'Your memory is in tatters.',
        // 'But do you remember...',
        <><div onClick={startCookie}>How to count to 1000?</div></>,
        'Maybe we should keep the fun music for a bit?',
        'After all, we need something to cheer us up...',
        'No?',
        'Fine.',
        'You\'re the Grinchiest Santa I\'ve ever met.',
        <><div onClick={() => playSong(Krampus)}>Maybe the elves wanted you gone...</div></>,
    ];

    return (
        <div className="App" style={{ backgroundColor: bgColor }}>
            <header className="App-header">
                <div className="journey" onClick={increment} style={{ backgroundColor: bgColor }}>
                    {!showCookie && !showList && story[index]}
                </div>
                <div className="cookie" onClick={cookieIncrement}>
                    {showCookie && <CookieClicker />}
                </div>
                <p>{showCookie && cookieCounter }</p>
                {/* <div className="captchaGuess">
                    {showTextField && <TextField id="outlined-basic" label="Outlined" variant="outlined" />}
                    {showTextField && <Button variant="contained" onClick={handleGuess}>Guess</Button>}
                </div> */}
                <div className="shoppingList">
                    {showList && <ShoppingList setShowList={setShowList} id={1} />}
                </div>
            </header>
     </div>
 );
}