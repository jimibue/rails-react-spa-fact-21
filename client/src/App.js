import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import Facts from './components/Facts';
import FactForm from './components/FactForm';

function App() {
  const [showForm, setShowForm] = useState(false)
  const [editFact, setEditFact] = useState(null)
  const [facts, setFacts] = useState([])

  // onmount do axios call
  useEffect(() => {
    getFacts()
  }, [])

  const getFacts = async () => {
    try {
      let res = await axios.get("/api/facts")
      setFacts(res.data)
    } catch (err) {
      alert("error occured getting facts, need to debug")
    }
  }
  const goHome = () => {
    setShowForm(false)
    setEditFact(null)
  }

  const getNavBar = () => {
    return (showForm || editFact) ? <div onClick={goHome}>Home</div> :
      <div onClick={() => setShowForm(true)}>New</div>
  }
  const editFactClickHandler =(id)=>{
    let fact = facts.find( fact => fact.id === id)
    setEditFact(fact)
  }

  const addFact = (fact) => {
    setShowForm(false)
    setFacts([fact, ...facts])
  }

  const updateFact = (editedFact) => {
    const updateFacts = facts.map (fact =>{
     return fact.id != editedFact.id ? fact : editedFact
    })
    setEditFact(null)
    setFacts(updateFacts)
  }

  const deleteFact = (factID) => {
    const filterFacts = facts.filter( fact => fact.id !== factID)
    setFacts(filterFacts)
    }
    


  const getPage = () => {
    return showForm ? <FactForm addFact={addFact}/> :
           editFact ? <FactForm {...editFact} updateFact={updateFact} setEditFact={setEditFact}/> :
           <Facts deleteFact={deleteFact} facts={facts} editFactClickHandler={editFactClickHandler} />

  }

  return (
    <div className="App">
      {getNavBar()}
      {getPage()}
    </div>
  );
}

export default App;
