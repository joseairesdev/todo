import React, {useState} from "react";
import './App.Global.css';
import * as C from './App.styled';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {
  const [ list, setList ] = useState<Item[]>([]);

  const handlerAddTask = (taskName:string) =>{
      let newList = [...list];
      newList.push({
        id:list.length +1,
        name:taskName,
        done:false
      });
      setList(newList);
  }

  return (
     <C.Container>
       <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

             <AddArea onEnter={handlerAddTask} />

             {list.map((item,index)=>(
               <ListItem key={index} item={item} />
             ))}
       </C.Area>
     </C.Container>
  );
}

export default App;
