import {puppyList} from './data.js'//shares information between data.js and App.jsx, kind of like when HTML is tied to a CSS and JS.
import { useState } from 'react'
import './App.css'


function App() {

//Remember that useState returns an array. And, the array contains two elements. The first is the value that you are storing. The second is a function, which you can use to reset the value. You can deconstruct both of those values from the array, ending up with this: 
const [puppies, setPuppies] = useState(puppyList); 
const [featPupId, setFeatPupId] = useState(null); 
const featuredPup = puppies.find((pup)=> pup.id === featPupId);
        console.log(featuredPup);
console.log(featPupId);
console.log(puppies);
  return (
      <div className="App"> {
      featPupId && ( 
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        {puppies.map((puppy) => {; //displays the name of each puppy.
       return (<p onClick={()=> { setFeatPupId(puppy.id);}} key={puppy.id}>{puppy.name}</p>);
})}
      </div>
  //strictMode, which is in my main.jsk. It's the wrap around component. It will help me find common bugs, but won't affect production build 
  )};
//To keep track of another piece of data in your application, create a new variable to store the ID of the selected puppy.

export default App
//Boiler plate code was deleted bc it was an example. This is default code that I don't need. 