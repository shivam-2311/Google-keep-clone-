import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';

function App() {
    const [addItem, setAddItem] = useState([])

   
    const addNote=(note)=>{
    
        setAddItem((prevData)=>{
            return[...prevData,note];
        });
        console.log(note);
        
    };
  const onDelete=(id)=>{
      setAddItem((oldData)=>
      oldData.filter((currData, indx)=>{
          return indx!== id;
      })
      )
  }
    return (
        <>
            <Header />
            <Note passNote={addNote} />
            { addItem.map((val,index)=>{
               return<CreateNote
                   key={index}
                   id={index}
                   title={val.title}
                   content={val.content}
                   deleteItem={onDelete}
               />
           })}
         <Footer/>
        </>
    );
}

export default App;
