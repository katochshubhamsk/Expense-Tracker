import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Expense from './components/Expense';
import NavBar from './components/NavBar';
import View from './components/View';
import Home from './components/Home';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'


function App() {

  // Variables

  // Hooks
  let [items , setItems] = useState([])
  let [totalAmount,setTotalAmount] = useState(0)
  // Methods

  const formHandler = (event,name,kind,oldAmount)=>{
    let amount = parseInt(oldAmount)
    setTotalAmount(totalAmount+amount)
    setItems((previousItems)=>{
      return([
        ...previousItems ,{
          id:uuidv4(),
          name,
          kind,
          amount
        }
      ])
    })
    
  }

  let delButton = (event , delId ,delAmount)=>{
    console.log(delAmount);
    let result = items.filter((item)=>{
      if (item.id === delId){
        null
      } 
      else
      return item
    })
    setItems(result)
    setTotalAmount(prevTotal => prevTotal - delAmount);
  }

  
  return (
    <>
          <Router>
            <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/expense" element={<Expense formHandler={formHandler} />} />
        <Route path='/view' element={<View items={items} totalAmount={totalAmount} delButton={delButton} />}></Route>
      </Routes>
      </Router>
    
    </>
  )
}

export default App