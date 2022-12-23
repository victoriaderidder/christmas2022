import React, { FC, useState } from 'react';
import Guess from './Guess';

interface RiddleProps {
  setShowElement: (showList: boolean) => void;
  id: number;
  answer: string[];
}

const Riddle: FC<RiddleProps> = ({ setShowElement, answer, id }) => {

  const SnowGlobeRiddle = [
    <>Winter, spring, summer or fall,  <br />
    Seasons can't alter this riddle at all.  <br />
    Regardless of sunshine or wind that may blow,<br />
    Things in this place will stay covered in snow.<br />
    Only an earthquake<br />
    (That comes from midair) <br />
    Reveals what's been hidden <br />
    And lays it all bare.
    <p>{<Guess setShowElement={setShowElement} answer={answer} />}</p>
  </>
  ]

  const WinterRiddle = [
    <>In spring, I come freely.  <br />
    In summer, you need me.  <br />
    In autumn, you loathe me.<br />
    In winter, you hold me.
    <p>{<Guess setShowElement={setShowElement} answer={answer} />}</p>
  </>
  ]

  const TreeRiddle = [
    <>I wear a dress of glowing light. <br />
    No longer can I grow. <br />
    I have many needles.<br />
    Yet never do I sew.
    <p>{<Guess setShowElement={setShowElement} answer={answer} />}</p>
  </>
  ]

  return (
    <>
    {id === 1 && SnowGlobeRiddle}
    {id === 2 && TreeRiddle}
    {id === 3 && WinterRiddle}
    </>
  );
};

export default Riddle;