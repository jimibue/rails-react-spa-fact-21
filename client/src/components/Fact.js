const Fact = (props) => {
  // thes are given to use when we did the {...fact}
  // in our map method in Fact.js
  const { text, username, stars, source, id, editFactClickHandler, deleteFact } = props
  return (
    <>
      <h1>{text}</h1>
      <p>User: {username} stars:{stars} source:{source}</p>
      <p onClick={() => editFactClickHandler(id)}>edit</p>
      <p onClick={() => deleteFact(id)}>delete</p>
      <hr />
    </>
  )
}

export default Fact