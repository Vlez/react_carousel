import "./App.css";
import { useEffect, useState, useRef } from "react";
import { run } from "holderjs/holder";

const images = [
  {
    size: "67px400",
    text: "Ejemplo 1",
    bg: "1f5496",
  },
  {
    size: "67px400",
    text: "Ejemplo 2",
    bg: "179e40",
  },
  {
    size: "67px400",
    text: "Ejemplo 3",
    bg: "ba1f3b",
  },
];

function App() {
  const [position, setPosition] = useState(0);
  const url = useRef(
    `holder.js/${images[position].size}?text=${images[position].text}&bg=${images[position].bg}`
  );

  useEffect(() => {
    run("image-class-name");
  }, []);

  useEffect(() => {
    run("image-class-name");
    url.current = `holder.js/${images[position].size}?text=${images[position].text}&bg=${images[position].bg}`;
    const timer = setTimeout(
      () =>
        position === images.length - 1
          ? setPosition(0)
          : setPosition(position + 1),
      3000
    );
    return () => clearTimeout(timer);
  }, [position]);

  return (
    <div className="App">
      <p
        onClick={() =>
          position === 0
            ? setPosition(images.length - 1)
            : setPosition(position - 1)
        }
        className="arrow"
      >
        {" "}
        {`<`}{" "}
      </p>
      <img className="image-class-name" data-src={url.current} alt="imagen" />
      <p
        onClick={() =>
          position === images.length - 1
            ? setPosition(0)
            : setPosition(position + 1)
        }
        className="arrow"
      >
        {" "}
        {`>`}{" "}
      </p>
    </div>
  );
}

export default App;
