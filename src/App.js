
import React from 'react';
import './App.css';
import boxes from './boxes'
import Box from './component/Box';

function App() {
  const[sqaures , setSquares] = React.useState(boxes)

  function toggle(id){
    setSquares(prevSquares => {
        return prevSquares.map((square) => {
          return square.id === id ? {...square, on: !square.on} : square
        })
    })
  }
  const sqaureElements = sqaures.map(square => (

    <Box 
    key={square.id} 
    id = {square.id}
    on = {square.on}
    toggle = {toggle}/>
  ))

  return (
   <main>
       {sqaureElements}
   </main>
   
  );
}

export default App;
