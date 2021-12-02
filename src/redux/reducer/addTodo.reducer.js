const initState = {
  todos: [],
  text: '',
  selected: undefined,
};

// const setPersist = (todos) =>
//   window.localStorage.setItem('todos', JSON.stringify(todos));

export const addTodo = (state = initState, action) => {
  let todos = [];
  switch (action.type) {
    // case 'PERSIST_TODOS':
    //   todos = JSON.parse(window.localStorage.getItem('todos'));
    //   return { ...state, todos: todos ? todos : [] };
    case 'ADD_TEXT':
      return { ...state, text: action.payload };
    case 'ADD_TODO':
      todos = state.todos.concat(action.payload);
      window.localStorage.setItem('todos', JSON.stringify(todos));
      return { ...state, todos: todos, text: '' };
    case 'DELETE_TODO':
      todos = state.todos.filter((todo, i) => i !== action.payload);
      // setPersist(todos);
      return {
        ...state,
        todos: todos,
      };
    case 'EDIT_TODO':
      return {
        ...state,
        text: state.todos[action.payload],
        selected: action.payload,
      };
    case 'EDIT_ADD_TODO':
      todos = state.todos.map((todo, i) =>
        i !== action.payload.selected ? todo : action.payload.value
      );
      // setPersist(todos);
      return {
        ...state,
        todos: todos,
        selected: undefined,
        text: '',
      };
    case 'DELETE_ALL':
      // setPersist([]);
      return { ...state, todos: [], text: '' };
    default:
      return state;
  }
};
