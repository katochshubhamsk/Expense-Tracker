import React from 'react'
import { useState } from 'react'

function Expense(props) {

    // Hooks
    let [name,setName] = useState('')
    let [kind,setKind] = useState('')
    let [amount,setAmount] = useState("")
    let [useAlert , setAlert] = useState(false)


    // Methods
    const formSubmit = (event)=>{
        event.preventDefault()
        props.formHandler(event,name,kind,amount)
        setAlert(true)
        setName("")
        setAmount("")
        setKind("")
    }
    const nameChange = (event)=>{
        setName(event.target.value)
    }

    const kindChange = (event)=>{
        setKind(event.target.value)

    }
    const amountChange = (event)=>{
        setAmount(event.target.value)
    }
    const alertClicked = (event)=>{
      setAlert(false)
    }

  return (
    <>
    {useAlert === true?<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Holy User!</strong> You should check View to see added expenses
  <button type="button" onClick={alertClicked} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> : null}
    <div className="container">
        <form action="" onSubmit={formSubmit}>
        <div className="input-group my-5 mt-5">
  <input type="text" value={name} required className="form-control" placeholder="Expense" onChange={nameChange} aria-label="Username"/>
  <select value={kind} required placeholder="Select Value" className="form-select" aria-label="Default select example" onChange={kindChange}>
  
  <option selected>Open this select menu</option>
  <option value="car">Car</option>
  <option value="subscription">Subscriptions</option>
  <option value="bills">Bills</option>
  <option value="food">Food</option>
</select>
</div>
<div className="input-group my-5">
  <input type="Number" required value={amount} onChange={amountChange} className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
  <span className="input-group-text">$</span>
</div>
    

    <center><button className="btn btn-dark"  type='submit'>Submit</button></center>

        </form>
</div>
    </>
  )
}

export default Expense