import React from 'react';
import {IoIosAddCircleOutline} from 'react-icons/io';
import './TodoInsert.css';



const TodoInsert= ()=> {
    return(
 <form className="TodoInsert">
     <input placeholder="할 일을 입력하세요"/>
         <button type="submit">
             <IoIosAddCircleOutline/>
         </button>
    
 </form>
    );
    };

    export default TodoInsert;



