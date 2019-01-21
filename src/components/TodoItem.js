import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  }

  render() {
    let { completed, id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> { ' ' }
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle={
  backgroundColor: '#ff0000',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;
