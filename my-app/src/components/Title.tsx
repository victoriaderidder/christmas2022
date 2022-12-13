import React, { FC } from 'react';

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <>
      <u><h1>{title}</h1></u>
    </>
  );
};

export default Title;