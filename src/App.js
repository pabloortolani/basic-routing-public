import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';

const page1 = () => <h1>Page 1</h1>;
const page2 = () => <h1>Page 2</h1>;
const usePageApi = () => {
  const [data, setData] = useState({});

  useEffect(()=> {
    axios.get('http://www.fanaticby.com/api/index.php')
    .then(res => {
      setData(res.data);
    }).catch(err =>{
      console.log(err);
    })
  }, []);

  return(
    <div>
      <h1>API</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )

}


const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/page1'>Page 1</Link></li>
          <li><Link to='/page2'>Page 2</Link></li>
          <li><Link to='/rest'>Rest</Link></li>
        </ul>
      </div>
      <Route path='/page1' component={page1} />
      <Route path='/page2' component={page2} />
      <Route path='/rest' component={usePageApi} />
    </Router>
  );
}

export default App;
