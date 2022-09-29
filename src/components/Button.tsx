import React, { useEffect, useState } from 'react';

/*interface for the prop passed*/
interface ColorsProps {
  colors: string[];
}

const Button: React.FC<ColorsProps> = (props) => {
  const arrLength = props.colors.length;
  const [count, setCount] = useState(0);
  const [activeColor, setActiveColor] = useState(props.colors[count]);

  useEffect(() => {
    /*when the count changes by 1, we determine the modulus and  use it to find the next item in array*/
    const newIndex = (count % arrLength) - 1;
    setActiveColor(props.colors[newIndex]);
  }, [count]);

  const handleOnClick = () => {
    /*when a user clicks on button, the count increments by 1*/
    setCount(count + 1);
  };
  return (
    <button style={{ backgroundColor: activeColor }} onClick={handleOnClick}>
      Please Click Me
    </button>
  );
};

export default Button;
