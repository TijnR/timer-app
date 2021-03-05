import React, { useState } from 'react'
import './App.css'
import TimerContainer from './components/TimerContainer'
import { QuickTimesContainer } from './components/QuickTimesContainer';
import { CostomTimeSelect } from './components/CostomTimeSelect';

function App() {
  const [quickTime, setQuickTime] = useState(0)

  const getQuickTime = (time: number) => {
    setQuickTime(time)
  }

  console.log(quickTime);
  

  return (
    <div className="App">
      <div className="App__inner">
        <section className="App__left section">
          <QuickTimesContainer getQuickTime={getQuickTime}/></section>
        <section className="App__middle">
          <TimerContainer quickTime={quickTime}/>
        </section>
        <section className="App__right">
        <CostomTimeSelect />
        </section>
      </div>
    </div>
  )
}

export default App
