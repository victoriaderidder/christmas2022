import React, { FC } from 'react';
import Guess from './Guess';
import stone from '../assets/img/stone.png'


interface StoneProps {
  setShowElement: (showList: boolean) => void;
    id: number;
}

const Stone: FC<StoneProps> = ({ setShowElement, id }) => {
  return (
    <>
        <img src={stone} id='stone' alt='stone' />
        <p>{<Guess setShowElement={setShowElement} id={id} />}</p>
    </>
  );
};

export default Stone;