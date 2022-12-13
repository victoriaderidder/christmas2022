import { useState } from "react";
import Title from "./Title";
const story = [
    <Title title='> Lizzy.' />,
  'You wake up.',
  'this',
  'game'
];

export default function Travel() {
    const [index, setIndex] = useState(Number);
    const increment = () => {
      index < 3 && setIndex(index + 1);
    };
    return (
    <div className="Journey" onClick={increment}>
        <p>{story[index]}</p>
    </div>
 );
}