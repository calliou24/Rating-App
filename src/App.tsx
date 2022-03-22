
import Card from './components/RatingFinished/card'
import Form from './components/RatingForm/form'
import { useState } from 'react'

function App() {

  const [rate, setRate] = useState(0)
  const [finished, setFinished] = useState(false)

  function hanndleSubmit ( e: any, num:number ){
    e.preventDefault()
    setRate(num)
    setFinished(true)
  }
  return (
    <div className="App">
      { finished ? <Card rate={rate}/> : 
                  <Form functionSubmit={hanndleSubmit} />

      }
    </div>
  )
}


export default App
