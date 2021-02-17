import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {//comparing id to the one youre clicking on
    setTodos(todos.filter(element => element.id !== todo.id))
  };
  const completeHandler = () => {//comparing id to the one youre clicking on
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed //whatever properties item already had, but change false to true for complete
          };
        }
        return item;
      })
    );
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={completeHandler} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default Todo;