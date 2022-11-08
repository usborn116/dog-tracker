import { useState, useEffect } from 'react';
import Dog from './Dog';

const Home = () => {

  const [pup, setPup] = useState([]);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const apiURL = `/api/v1/dogs`;
  
    fetch(apiURL, {mode: 'cors'})
    .then(response => response.json())
    .then(data => setPup(data))
   }, [clicks]);

  return (
    <div>
      <h1>Hello Proud Pup Owner!</h1>
      {pup.map((pup) => 
          <Dog data={pup} key={pup.id} clicks={clicks} setClicks={setClicks} />
      )}
    </div>
  )

}

export default Home;