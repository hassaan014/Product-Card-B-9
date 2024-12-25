import React from 'react'
import Card from './Components/Card/Card'
import {Data} from "./data"
import "./App.css"

const App = () => {
  return (
    <div className="main">
    {Data.map((e,i)=>{
      return <Card title={e.title} category={e.category} description={e.description} key={i} price={e.price} star={e.rating.rate} count={e.rating.count} img={e.image} />
    })}
    </div>
  )
}

export default App