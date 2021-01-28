import React from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';

function CreateNote(props) {
    const deleteNode=()=>{
        props.deleteItem(props.id);
    }
    return (
        <>
        <div className='note'>
        <div className='note-new '>
            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <button className='new-btn2' onClick={deleteNode}>x</button>
        </div>
     </div>
    </>
    )
}

export default CreateNote;
