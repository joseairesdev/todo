import React, { useState, KeyboardEvent } from 'react';
import * as C from './styled';

type Props = {
    onEnter: (taskName:string) => void
}

export const AddArea =  ({onEnter}:Props) =>{

    const [ inputText, setInputText ] = useState('');
     
    const handlerKeyUp = (e:KeyboardEvent) =>{
         if(e.code==='Enter' && inputText !== '' ){
            onEnter(inputText);
            setInputText('');
         }
    }

    return (
     <C.Container>
         <div className='image'>+</div>
         <input 
          type="text"
          placeholder='Digite sua Tarefa'
           value={inputText} 
           onChange={e=>setInputText(e.target.value)}
           onKeyUp={handlerKeyUp}
         />
     </C.Container>
    );
}