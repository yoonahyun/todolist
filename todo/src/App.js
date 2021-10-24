import React, {useState,useRef,useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import Calendar from './components/Calendar';
import TodoInsert from './components/TodoInsert';
import Todolist from './components/Todolist';


const App=()=>{



  
  const [todos,setTodos]=useState([
    
  ]);


  const nextId=useRef(4);
  
  const onInsert= useCallback(
    text=> {
      const todo = {
        id: nextId.current,
        text,
        check: false,
      };
    setTodos(todos.concat(todo));
    nextId.current +=1;
    
    },
    [todos],
  );


  const onRemove=useCallback(
    id=> {
      setTodos(todos.filter(todo=>todo.id!==id));
    },
    [todos],
  );

  const onToggle=useCallback(
    id=> {
      setTodos(
        todos.map(todo=>
          todo.id===id? {...todo, checked: !todo.checked }: todo,
          ),
      );
    },
    [todos],
  );



 

  return(<TodoTemplate>
     <Calendar></Calendar>
    <TodoInsert onInsert={onInsert}/>
    <Todolist todos={todos} onRemove={onRemove} onToggle={onToggle}/>
   
  </TodoTemplate>
  );
};



export default App;
