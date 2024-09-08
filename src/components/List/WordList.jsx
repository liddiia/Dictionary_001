import React from 'react'
import ListItem from 'components/ListItem/ListItem';
export default function WordList({words,handleDelWord}) {

    return (
    <div className='wordListItem'> <h2>Words List</h2>
     <ul>
        {words.map(word => {
     return <ListItem key={word.id} word={word} handleDelWord={()=>handleDelWord(word.id)}/>;
         }   
//============2 var ============div ListItem==================
// <ListItem key={word.id} word={word} handleDelWord={handleDelWord}/>;
        )}
        </ul>   
     
        </div>
  );
}
