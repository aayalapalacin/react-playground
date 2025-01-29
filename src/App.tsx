import React from 'react';
import './App.css';
import { tutorialsArray

 } from './tutorials.ts';
function App() {
  return (
    <div className="container">
        <h1>Here are my tutorials:</h1>
        {tutorialsArray && tutorialsArray.length > 0 ?
        tutorialsArray.map((
          (tutorial,tutorialIndex)=>{
            return(
              <div key={tutorialIndex+"tutorials"}>
                {tutorial.name}
              </div>
            )
          }
        ))
        :
        "no tutorials"  
      }
      
    </div>
  );
}

export default App;
