import './index.css';
import InputField from './components/InputField';
import TodosList from './components/TodosList';
import { deleteAll } from './redux/action/addTodo.action';
import { connect } from 'react-redux';
const App = ({ deleteAll }) => {
  return (
    <div className="App">
      <h1
        style={{
          fontFamily: 'Patrick Hand',
          color: '#00A170',
          fontSize: '60px',
        }}
      >
        {' '}
        Todos App
      </h1>
      <InputField />
      <TodosList />
      <div>
        <button
          style={{
            padding: '10px',
            borderRadius: '10px',
            marginTop: '20px',
            cursor: 'pointer',
            hover: 'green',
          }}
          onClick={deleteAll}
        >
          {' '}
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
});
export default connect(null, mapDispatchToProps)(App);

// import React, { useEffect } from 'react';
// import './index.css';
// import InputField from './components/InputField';
// import TodosList from './components/TodosList';
// import { deleteAll, persistTodos } from './redux/action/addTodo.action';
// import { connect } from 'react-redux';
// const App = ({ deleteAll, persistTodos }) => {
//   useEffect(() => {
//     persistTodos();
//   }, [persistTodos]);
//   return (
//     <div className="App">
//       <h1
//         style={{
//           fontFamily: 'Patrick Hand',
//           color: '#00A170',
//           fontSize: '60px',
//         }}
//       >
//         {' '}
//         Todos App
//       </h1>
//       <InputField />
//       <TodosList />
//       <div>
//         <button
//           style={{
//             padding: '10px',
//             borderRadius: '10px',
//             marginTop: '20px',
//             cursor: 'pointer',
//             hover: 'green',
//           }}
//           onClick={deleteAll}
//         >
//           {' '}
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   deleteAll: () => dispatch(deleteAll()),
//   persistTodos: () => dispatch(persistTodos()),
// });
// export default connect(null, mapDispatchToProps)(App);
