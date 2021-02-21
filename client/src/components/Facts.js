// import axios from "axios";
// import { useState, useEffect } from "react";
import Fact from "./Fact";

const Facts = (props) => {
  // set our facts getter and setter
  // const [facts, setFacts] = useState([])

  // onmount do axios call
  // useEffect(() => {
  //   getFacts()
  // }, [])

  // const getFacts = async () => {
  //   try {
  //     let res = await axios.get("/api/facts")
  //     setFacts(res.data)
  //   } catch (err) {
  //     alert("error occured getting facts, need to debug")
  //   }
  // }
  const {facts, setShowForm, editFactClickHandler, deleteFact} = props 
  const renderFacts = () => {
    if(facts.length == 0){
      return <h1>No facts</h1>
    }
    return facts.map( fact => {
      return <Fact key={fact.id} deleteFact={deleteFact} editFactClickHandler={editFactClickHandler} setShowForm={setShowForm} {...fact} />
    })
  }

 
  return (
    <>
     {renderFacts()}
    </>
  )
}

export default Facts