import React, { useState, useEffect } from 'react';

const App = () =>  {

  const [initial, setInitial ] = useState([{}]);

  useEffect(() => {
    fetch("/api").then((rep) => rep.json()).then(data => {
      console.log(data);
      setInitial(data)
    })
  },[])
  return (
    <>
    hello</>
  );
}

export default App;
