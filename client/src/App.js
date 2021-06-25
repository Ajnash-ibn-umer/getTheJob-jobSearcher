
import './App.css';
import axios from 'axios'
import { log } from 'debug';

function App() {

  
  return (
    <div className="App">
     <h1 onClick={()=>{
       console.log('hooi')
       axios.get("http://localhost:8000/").then((data)=>{
         console.log(data)

       }).catch(err=>{
         console.log('err  '+err.message)
       })
     }} >hellow</h1>
    </div>
  );
}

export default App;
