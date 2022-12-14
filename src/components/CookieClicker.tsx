import React, { FC } from 'react';
import cookie from '../assets/img/cookie.png'


interface CookieClickerProps {
  title?: string;
  subtitle?: string;
}

// let counter = 0

// const counterStuff = () => {
//   (counter += 1)
//   console.log(counter)
// }

const CookieClicker: FC<CookieClickerProps> = ({ title, subtitle }) => {
  return (
    <>
      <img src={cookie} id='cookie' alt='cookie' />
    </>
  );
};

export default CookieClicker;