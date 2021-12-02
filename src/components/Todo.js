import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/action/addTodo.action';

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    <div
      style={{
        backgroundColor: '#00A170',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid',
        borderRadius: '5px',
        margin: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
      }}
    >
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
      <div style={{ cursor: 'pointer' }} onClick={() => deleteTodo(idx)}>
        x
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
  editTodo: (key) => dispatch(editTodo(key)),
});

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected,
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);