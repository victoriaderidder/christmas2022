import React, { FC } from 'react';
import Guess from './Guess';

interface ShoppingListProps {
    setShowList: (showList: boolean) => void;
    id: number;
}

// const handleGuess = (guess: string) => {
//     guess.toLowerCase() === 'captcha'
// }

const ShoppingList: FC<ShoppingListProps> = ({ setShowList, id }) => {
  return (
    <>
    3 Rice<br />
    4 Onions<br />
    2 Sour cream<br />
    4 Milk<br />
    10 Strawberries<br />
    8 Salad dressings
    <p>{<Guess setShowList={setShowList} id={id} />}</p>
    </>
  );
};

export default ShoppingList;