import { useState } from 'react';
import { FaXTwitter, FaQuoteLeft } from 'react-icons/fa6';
import quotes from './assets/quotes.json';
import './App.css';

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = 'all 1s';

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [randomColor, setRandomColor] = useState(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div
      className="background h-screen flex justify-center items-center"
      style={{ backgroundColor: randomColor, transition }}
    >
      <div
        id="quote-box"
        className="w-[500px] min-h-[300px] flex flex-col justify-between p-8 text-center bg-white rounded-[5px]"
      >
        <div
          className="quote-content text-center clear-both"
          style={{ color: randomColor, transition }}
        >
          <span id="text" className="text-3xl">
            <FaQuoteLeft
              size={30}
              style={{ marginRight: '10px', transition }}
            />
            {quote.quote}
          </span>
          <div id="author" className="text-end mt-4">
            - {quote.author}
          </div>
        </div>
        <div className="buttons flex justify-between mt-5">
          <a
            id="x-quote"
            href={`https://x.com/intent/post?hashtags=quotes&related=thedeepakk12&text="${quote.quote}" -${quote.author}`}
            style={{ backgroundColor: randomColor, transition }}
            className="rounded-[5px]"
          >
            <FaXTwitter className="p-2" size={40} color="white" />
          </a>
          <button
            id="new-quote"
            className="text-white pl-4 pr-4 cursor-pointer rounded-[5px]"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
