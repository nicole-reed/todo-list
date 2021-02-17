import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => { //instead of writing (props)
  const inputTextHandler = (e) => {
    //console.log(e) shows in console info about whats happeneing. e.target is input. value is value.
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); //prevents page from refreshing on submit
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 } //obv dont use math.random in real apps
    ])
    setInputText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value)
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;