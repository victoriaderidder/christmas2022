import React, { FC } from 'react';

interface CookieClickerProps {
  title: string;
  subtitle?: string;
}

const CookieClicker: FC<CookieClickerProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

export default CookieClicker;