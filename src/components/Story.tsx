import React, { FC } from 'react';

interface StoryProps {
  story: string;
}

const Story: FC<StoryProps> = ({ story }) => {
  return (
    <>
      {story}
      <div>{'==>'}</div>
    </>
  );
};

export default Story;