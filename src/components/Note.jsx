import React, { useState } from 'react'

function Note(props) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const [expand, setExpand]=useState(false);
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };
    const addEvent = (e) => {
        e.preventDefault();

        props.passNote(note);
        setNote({
            title: '',
            content: ''
        });
    }
    const expandIt=()=>{
        setExpand(true);
    }
    return (
        <>  <div className='main'>
            <div className='main-note' >
                <form>
                {expand ?(   <input type='text' placeholder='Title' autoComplete='off' name='title' value={note.title} onChange={inputEvent} />):null}
                    <textarea rows='' column='' placeholder='Write your Text...' autoComplete='off' onClick={expandIt} name='content' value={note.content} onChange={inputEvent} ></textarea>
                    {expand ?  ( <button className='new-btn' onClick={addEvent} >+</button>):null}
                </form>
            </div>
            </div>  
        </>
    )
}

export default Note
