import React from 'react';
import './TodoTemplate.css';

const TodoTemplate =({children})=>{
    return(
        <div className="TodoTemplate">
            <div className="app-title">TODO LIST</div>
            
            <div className="content">{children}</div>
        </div>
    );
    
};
export default TodoTemplate;