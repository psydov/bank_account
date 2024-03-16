import { useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import Operation from './components/Operation';

function App() {
  const [quote, setQuote] = useState('Winter is comming...');

  const fetchQuote = async () => {
    const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
    const data = await response.json();
    setQuote(data.sentence)
    // fetch('https://api.gameofthronesquotes.xyz/v1/random')
    //   .then(res => res.json())
    //   .then(data => setQuote(data.sentence))
  }

  return (
    <div>
      <Balance quote={quote} />
      <Operation fetchQuote={fetchQuote} />
    </div>
  );
}

export default App;
