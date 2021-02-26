import React,{useState, useEffect} from "react"

export default function App(){

const [messageArray, setMessageArray] = useState([]) 
const [newMessage, setNewMessage] = useState('')




// this function adds new array item
const addNewMessage = () =>{ 

  fetch('http://localhost:4000/home/add', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      message: newMessage
    })
  })
  .then(response => response.json(newMessage))
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


}

// this function fetches array items  
const fetchMyData = () => { fetch('http://localhost:4000/home/getAllNotes')  
.then(res => res.json())
.then(data => setMessageArray(data))
}

useEffect(()=>{
  
  fetchMyData()
  console.log('effect1')



},[addNewMessage])





const handleChange = (e) => {
 setNewMessage(e.target.value) 
}



return(
  <div>
    {messageArray.map((message)=>
      <li key={message._id}>
        <input readOnly value={message.message}/></li>
    )}

      <input type='text' onChange={(e) => handleChange(e)} value={newMessage}/>
    <h3>{newMessage}</h3>
    <button onClick = {() => addNewMessage()}>Add</button>
  </div>
)

}


// import React,{useState, useEffect} from 'react';

// function App(){

//   let [count, setCount] = useState(0)
// let [count2, setCount2] = useState(0)

//  const increment = () =>{
//     setCount(count  + 1)
//   }

//   const increment2 = () =>{
//     setCount2(count2  + 1)
//   }

//   useEffect(() => {
//     increment()
//     console.log("effect")

//   },[])



//   useEffect(() => {

//     console.log("effect2")

//   },[])
//   return(
//     <div>
//       <div>{count}</div>
//       <button onClick={() => increment()}>inc</button>

//       <div>{count2}</div>
//       <button onClick={() => increment2()}>inc</button>


//     </div>
//   )
// }

// export default App;