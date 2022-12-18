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
import Captcha from "./Captcha";
import Guess from "./Guess";

export default function Travel(this: any) {
    const [audio, setAudio] = useState(new Audio(Krampus));
    const [index, setIndex] = useState(Number);
    const [bgColor, setBgColor] = useState('#282c34');
    const [showCookie, setShowCookie] = useState(false)
    const [showList, setShowList] = useState(false)
    const [showCaptcha, setShowCaptcha] = useState(false)
    const [showWordSearch, setShowWordSearch] = useState(false)
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
        <><div className='spinner-container'><img src={snowflake} id='snowflake' alt='snowflake' onClick={() => playSong(Krampus)} /></div></>,
        // <Title title='> Santa Lizzy.' />,
        // <Story story={`You wake up.`}/>,
        // <Story story={`This is not the North Pole.`}/>,
        // <Story story={`Not anymore.`}/>,
        // <Story story={`It's dark and you\'re disoriented.`}/>,
        // <Story story={`You try to remember how you got here.`}/>,
        // <Story story={`You'd been getting ready for your first ever Christmas as Santa.`}/>,
        // <Story story={`It was late at night.`}/>,
        // <Story story={`You'd gone out to check on the reindeer.`}/>,
        // <Story story={`Comet had seemed nervous and upset.`}/>,
        // <Story story={`You remember trying to soothe him...`}/>,
        // <Story story={`...`}/>,
        // <Story story={`......`}/>,
        // <Story story={`..............................`}/>,
        // <Story story={`...And then what?`}/>,
        // <Story story={`Your head really hurts...`}/>,
        // <Story story={`Suddenly, across the room, a door bursts open!`}/>,
        // <Story story={`Light floods the room...`}/>,

        // <><div onClick={() => playAndChange(DeckTheHalls, '#C30F16')}><Title title='> Elfward.' /></div></>,
        // <><div onClick={() => playAndChange(Krampus, '#282c34')}><Story story={`Yay! You're at the North Pole!!!`}/></div></>,
        // <Story story={`Except Santa is missing and Christmas is ruined and everything is absolutely terrible.`}/>,
        // <Story story={`This should be the most magical time of the year.`}/>,
        // <Story story={`Up until two days ago, you were busy helping Santa get ready for her first Christmas!`}/>,
        // <Story story={`You'd barely left the new Santa\'s side since she started.`}/>,
        // <Story story={`You were so excited to help bring joy to children everywhere!`}/>,
        // <Story story={`And now...and now...`}/>,
        // <Story story={`Oh, woe! It is simply too terrible to speak of!`}/>,
        // <Story story={`Anyway, the workshop is in crisis.`}/>,
        // <Story story={`Everybody is absolutely losing it.`}/>,
        // <Story story={`YOU ARE ALSO LOSING IT!!!!!!`}/>,
        // <Story story={`...But as head elf, you need to keep it together.`}/>,
        // <Story story={`After all, if you don't, who will?`}/>,
        // <Story story={`Will?`}/>,
        // <Story story={`Will..`}/>,
        // <Story story={`Is nowhere to be found.`}/>,
        // <Story story={`Great.`}/>,

        // <Title title='> GoodWill Toward Men.' />,
        // <Story story={`(Your friends call you Will.)`}/>,
        // <Story story={`You are not exactly the head elf, but you tend to get shit done.`}/>,
        // <Story story={`You've, um, "questioned" every single elf in the workshop.`}/>,
        // <Story story={`Some would say interrogated, but those people need to stuff it.`}/>,
        // <Story story={`SANTA IS MISSING THIS IS AN EMERGENCY`}/>,
        // <Story story={`Anyway, one of your victims...`}/>,
        // <Story story={`...uh, one of the elves...`}/>,
        // <Story story={`...mentioned seeing Santa heading towards the stables before she disappeared.`}/>,
        // <Story story={`You are leaving no stone unturned.`}/>,
        // <Story story={`And no pile of reindeer dung unturned either!`}/>,
        // <Story story={`You're shoveling through every single pile of crap in this stable.`}/>,
        // <Story story={`You're pretty sure this dedication will pay off at the next head elf election.`}/>,
        // <Story story={`(You lost the last one due to politics and people being generally terrified of you.)`}/>,
        // <Story story={`Anyway, you're digging, and digging, and digging.`}/>,
        // <Story story={`Something shiny catches your eye...`}/>,

        // <Title title='> Santa Lizzy.' />,
        // <Story story='A shadowy figure stands in the doorway.'/>,
        // <Story story={`"So. You're finally awake."`} />,
        // <Story story='The figure comes into view...'/>,
        // <Story story={`He looks familiar, but you can\'t quite place him.`}/>,
        // <Story story={`"Where am I?" you ask.`} />,
        // <Story story={`"Don't worry about that," he says.`}/>,
        // <Story story={`Yet, somehow, you are worried about that. Strange.`}/>,
        // <Story story={`"Why have you brought me here?" you ask.`}/>,
        // <Story story={`"You know why you're here."`}/>,
        // <Story story={`Wow. This guy is just the worst.`}/>,
        // <Story story={`"Refresh my memory?"`}/>,
        // <Story story={`He slams his hand against the wall.`}/>,
        // <Story story={`"You killed my father!"`}/>,
        // <Story story='What? You did not.'/>,
        // <Story story={`"You're wearing his coat!"`}/>,
        // <Story story={`And that's when you realize how you know him...`}/>,
        // <Story story={`"Charlie?" you ask incredulously.`}/>,
        // <Story story={`Yep. It's Charlie Calvin. Like from The Santa Clause.`}/>,
        // <Story story={`He's a couple of decades older, but it\'s definitely him.`}/>,
        // <Story story={`"It's Charles now," he says.`}/>,
        // <Story story={`"I didn't kill your father," you say. "There was this robot — "`}/>,
        // <Story story={`Charles does not believe your frankly ridiculous story.`}/>,
        // <Story story={`"I was always supposed to be the next Santa," he says.`}/>,
        // <Story story={`"That coat you're wearing belongs to me."`}/>,
        // <Story story={`For some mysterious reason, you just don't feel this guy would make a great Santa.`}/>,
        // <Story story={`Luckily, you know that for the Santa Clause to activate, the coat can't be taken by force.`}/>,
        // <Story story={`You'd have to willingly give it to him, and there's no way you're going to do that...`}/>,
        // <Story story={`"That's fine," he says. "I can be patient."`}/>,
        // <Story story={`And with that, he leaves, closing the door behind him.`}/>,
        // <Story story={`You are once again alone in the dark.`}/>,

        // <Title title='> Elfward.' />,
        // <Story story={`You sit miserably at your desk.`} />,
        // <Story story={`You've called everyone you can think to call.`} />,
        // <Story story={`You've looked everywhere you can think to look.`} />,
        // <Story story={`Christmas Eve is tomorrow, and Santa is nowhere to be found.`} />,
        // <Story story={`Of course there is no one who can replace Santa.`} />,
        // <Story story={`NO ONE!`} />,
        // <Story story={`But...`} />,
        // <Story story={`The previous Santa's kid knows everything there is to know about being Santa.`} />,
        // <Story story={`You might have to see if he can fill in.`} />,
        // <Story story={`Also you would have to make sure nobody finds out about this.`} />,
        // <Story story={`It would probably ruin Christmas or something.`} />,
        // <Story story={`But you are getting super desperate.`} />,
        // <Story story={`Something on Santa's desk catches your eye.`} />,
        // <Story story={`It's...a shopping list?`} />,
        // <><div onClick={() => setShowList(true)}><Story story={`That's weird. Santa doesn't shop...`} /></div></>,
        // <Story story={`Hmmm. Santa's magic cookie.`} />,
        // <Story story={`It can always get Santa home again.`} />,
        // <Story story={`Which means she must not have it with her...`} />,
        // <Story story={`Or it was taken from her.`} />,
        // <Story story={`You stand up quickly.`} />,
        // <Story story={`You need to find that cookie.`} />,

        // <Title title='> Will.' />,
        // <Title title='> WILL.' />,
        // <Title title='> GoodWill Toward Men?' />,
        // <Story story={`Wow. Are we not friends?`} />,
        // <Story story={`You pull the shiny object out of the reindeer dung.`} />,
        // <Story story={`It's a wrapped present.`} />,
        // <Story story={`It's not addressed to you, but desperate times call for desperate measures.`} />,
        // <><div onClick={() => setShowWordSearch(true)}><Story story={`You tear the package open...`} /></div></>,
        // <Story story={`Well, you do remember showing Santa a captcha last year.`}/>,
        // <Story story={`(That's right. You're the elf that considered betraying her.)`} />,
        // <Story story={`(But to be fair, you totally would have been on Robot Santa's nice list.)`} />,
        // <Story story={`Anyway, you are very dedicated to personally finding Santa.`} />,
        // <Story story={`(The elf election is only 300 years away and you need to look good.)`} />,
        // <Story story={`You think you know where that captcha is.`} />,
        // <Story story={`You hustle off in search of it.`} />,

        // <Title title='> Santa Lizzy.' />,
        // <Story story={`You're not sure how long you've been alone in the dark.`} />,
        // <Story story={`Also, must I remind you that`} />,






        // <Title title='> Elfward.' />,
        // <Story story={`You look for the cookie and receive a knight puzzle`} />,

        // <Title title='> GoodWill Toward Men.' />,
        // <Story story={`You find the captcha buried in a chest of mementos.`} />,
        // <Story story={`The chest is lovingly filled with treasures accumulated over the years.`} />,
        // <Story story={`You're not really a sentimental person.`} />,
        // <Story story={`Which is why you found this chest of mementos in Santa's chambers.`} />,
        // <Story story={`What she doesn't know won't hurt her.`} />,
        // <Story story={`Also, must I remind you that`} />,
        // <Story story={`SANTA IS MISSING THIS IS AN EMERGENCY`} />,
        // <Story story={`?!??!?!?!?!??!`} />,
        // <Story story={`No. I didn't think so.`} />,
        // <Story story={`You understand the urgency of the situation.`} />,
        // <Story story={`You take a look at the captcha and notice something has changed...`} />,
        // <Story story={`There's something scrawled on the back:`} />,
        // <Story story={`"What's wrong with this picture?"`} />,
        // <Story story={`It seems that someone is interfering with your investigation.`} />,
        // <Story story={`Possibly a rival for head elf?`} />,
        // <Story story={`You WILL get to the bottom of this.`} />,
        // <Story story={`Or your name isn't Will!`} />,
        // <Story story={`Haha.`} />,
        // <Story story={`(Please let me call you Will.)`} />,
        // <Story story={`You have no time for my foolish games!`} />,
        // <><div onClick={() => setShowCaptcha(true)}><Story story={`You study the captcha intently...`} /></div></>,
        // <Story story={`It does seem that someone has haphazardly erased the N from your clever captcha.`} />,
        // <Story story={`Turning NOEL into NO ELLEN.`} />,
        // <Story story={`You are not pleased with this vandalism.`} />,
        <Story story={`Nor are you pleased with the idea of involving LA BEFELLENA.`} />,
        <Story story={`She is a mystical old witch who lives in the forest and hasn't been seen for 1000 years.`} />,
        <Story story={`You would prefer not to see her for 1000 more.`} />,

        <Title title='> La Befellena.' />,
        <Story story={`You are a mystical old witch who lives in the forest and hasn't been seen for 1000 years.`} />,
        <Story story={`Hasn't been seen by the elves, that is. You see yourself just fine.`} />,
        <Story story={`You are basically an Italian Santa Claus.`} />,
        <Story story={`You've been doing the job perfectly fine for over a millennium.`} />,
        <Story story={`And yet when the time came for a new Santa, he passed the coat to a child?`} />,
        <Story story={`Insane.`} />,
        <Story story={`Unfair.`} />,
        <Story story={`That should be you in Charlie Calvin's little jail cell.`} />,
        <Story story={`Yes, you know where Santa is.`} />,
        <Story story={`Unlike everybody else in the North Pole, you are actually a magical being.`} />,
        <Story story={`You could just tell the elves where Santa is.`} />,
        <Story story={`But there's still time until Christmas Eve.`} />,
        <Story story={`And they should have to come to you.`} />,
        <Story story={`You are sick and tired of the disrespect.`} />,
        <Story story={`Either they give you the esteem you deserve, or you...`} />,
        <Story story={`Well, you haven't gotten that far yet.`} />,
        <Story story={`Maybe you'll leave Santa to rot and do the job yourself.`} />,
        <Story story={`Then you'd finally get some appreciation around here.`} />,


        // 'You\'ve forgotten a lot.',
        // 'Your memory is in tatters.',
        // 'But do you remember...',
        // <><div onClick={startCookie}>How to count to 1000?</div></>,
        // 'Maybe we should keep the fun music for a bit?',
        // 'After all, we need something to cheer us up...',
        // 'No?',
        // 'Fine.',
        // 'You\'re the Grinchiest Santa I\'ve ever met.',
        // <><div onClick={() => playSong(Krampus)}>Maybe the elves wanted you gone...</div></>,
    ];

    return (
     <>
        <div className="App" style={{ backgroundColor: bgColor }}>
            <div className="App-header">
                {(!showCookie && !showList && !showWordSearch && !showCaptcha) && <div className="journey" onClick={increment} style={{ backgroundColor: bgColor }}>
                    {story[index]}
                </div>}
                {showCookie && <div className="cookie" onClick={cookieIncrement}>
                    <CookieClicker />
                    <p>{cookieCounter}</p>
                </div>}
                {showList && <div className="shoppingList">
                    <ShoppingList setShowElement={setShowList} id={1} />
                </div>}
                {showWordSearch ? <div className={"wordSearch"} style={{marginBottom: '100px'}}>
                    <Guess setShowElement={setShowWordSearch} id={2} /> 
                </div> : null}
                {showCaptcha && <div className="captcha">
                    <Captcha setShowElement={setShowCaptcha} id={3} />
                </div>}
            </div>
        </div>
    </>
    );
}