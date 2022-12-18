import React, { FC } from 'react';
import Guess from './Guess';
import captcha from '../assets/img/captcha.jpeg'


interface CaptchaProps {
  setShowElement: (showList: boolean) => void;
    id: number;
}

const Captcha: FC<CaptchaProps> = ({ setShowElement, id }) => {
  return (
    <>
    <p>"What's wrong with this picture?"</p>
      <img src={captcha} id='captcha' alt='captcha' />

    <p>{<Guess setShowElement={setShowElement} id={id} />}</p>
    </>
  );
};

export default Captcha;