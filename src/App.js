import { useState } from 'react';
import './App.css';

function App() {
  const api = 'https://countriesnow.space/api/v0.1/countries/capital';
  const [name, setName] = useState(null);

  fetch(api, { method: "GET" }).then((res) => res.json()).then((data) => {
    // setName(data[0].name);
    console.log(data);
  }).catch(error => console.error(error))

  return (
    <div >
      Hello world!
      {name}
    </div>
  );
}

export default App;
