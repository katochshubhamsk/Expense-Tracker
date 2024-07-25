import React, { useState } from 'react'
import styles from './View.module.css'





function View(props) {
  let [useAlert , setAlert] = useState(false)
  let [delName , setDelName] = useState()

  let items =props.items
  let totalAmount = props.totalAmount
  
  const delHandle = (event,id,delAmount,name)=>{
    props.delButton(event,id,delAmount)
    setAlert(true)
    setDelName(name)
  }
  const alertClicked = (event)=>{
    setAlert(false)
  }
  
  return (
    <>
    {useAlert === true?<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Holy User!</strong> You Just Deleted a Expense {delName}
  <button type="button" onClick={alertClicked} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> : null}
    {totalAmount === 0 ? <h1 className={`${styles.heading} mt-4`}>Add expenses</h1>:    <center><h1 className={`mt-4 ${styles.heading}`}>Total Amount :{totalAmount}</h1></center>    }
    {items.map((item)=>{
      return(<div key={item.id}>
      <div className={`${styles.mainCard}`} >
        <div className={`${styles.cardTop}`}>
              <h3>{item.name}</h3>
              <h3>{item.kind}</h3>

        </div>
        <div className={`${styles.cardBottom} mt-5`}>
             <center><h3>{item.amount}</h3></center>
             <button onClick={(event)=>{
              delHandle(event , item.id , item.amount,item.name)
             }} className={`${styles.delButton} btn btn-danger my-4`} >x</button>
             
        </div>
        
      </div>
       
      </div>)
    })}
      
    </>
  )
}

export default View