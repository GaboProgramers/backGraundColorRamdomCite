import { useState } from 'react'
import './App.css'
import QuotesBox from './components/QuotesBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  // ? getting a random index
  const getRamdomFromArray = arr => {
    const indexRamdom = Math.floor(arr.length * Math.random())
    return arr[indexRamdom]
  }

  // ? Random quotes and colors generator
  const [quoteRamdom, setQuoteRamdom] = useState(getRamdomFromArray(quotes))
  const [colorRamdom, setColorRamdom] = useState(getRamdomFromArray(colors))

  // ? Function To change the backgroundColor of the letter and the texts..!!
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
        quote={quotes}
      />
    </div>
  )
}

export default App
