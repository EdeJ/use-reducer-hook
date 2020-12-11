import React, { useReducer, useState } from 'react'

function App() {

  const ACTIONS = {
    ADD_TODO: 'add-todo'
  }

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function reducer(todos, actions) {
    switch (actions.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(actions.payload.name)];

      default:
        return todos;
    }
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
  }



  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </form>
  )
}

export default App
