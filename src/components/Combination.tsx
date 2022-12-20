import React, { FC } from 'react';
import Guess from './Guess';
import number1 from '../assets/img/number1.png'
import number2 from '../assets/img/number2.jpeg'
import number3 from '../assets/img/number3.png'

interface CombinationProps {
  setShowElement: (showList: boolean) => void;
    id: number;
}

const Combination: FC<CombinationProps> = ({ setShowElement, id }) => {
  return (
    <>
        <img src={number1} id='number1' alt='number1' style={{width: '200px', height: '200px'}} />
        <img src={number2} id='number2' alt='number2' style={{width: '200px', height: '200px'}} />
        <img src={number3} id='number3' alt='number3' style={{width: '200px', height: '200px'}} />
        <p>{<Guess setShowElement={setShowElement} id={id} />}</p>
    </>
  );
};

export default Combination;