import { useState } from 'react'
import './App.css'
import QuotesBox from './components/QuotesBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const getRamdomFromArray = arr => {
    const indexRamdom = Math.floor(arr.length * Math.random())
    return arr[indexRamdom]
  }

  const [quoteRamdom, setQuoteRamdom] = useState(getRamdomFromArray(quotes))
  const [colorRamdom, setColorRamdom] = useState(getRamdomFromArray(colors))


  const handleClick = () => {
    setQuoteRamdom(getRamdomFromArray(quotes))
    setColorRamdom(getRamdomFromArray(colors))
  }

  const obj = {
    backgroundColor: colorRamdom
  }

  return (
    <div className="App" style={obj}>
      <QuotesBox
        quoteRamdom={quoteRamdom}
        handleClick={handleClick}
        colorRamdom={colorRamdom}
      />
    </div>
  )
}

export default App
