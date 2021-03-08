import React, { Component } from "react";
import { Link } from "react-router-dom";
import { queryData } from "../../api/todo";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.showData = this.showData.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.showData();
  }

  async showData() {
    const data = await queryData();
    this.setState = {
      todos: data,
    };
  }

  onDelete() {}

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <Link to="/todo/create">Create</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Content</th>
              <th scope="col">User_id</th>
              <th scope="col">Created date</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr key={todo.id}>
                <th scope="row">{todo.id}</th>
                <td>{todo.content}</td>
                <td>{todo.user_id}</td>
                <td>{todo.create_date}</td>
                <td>
                  <button onClick={this.onDelete}>Delete</button>
                  <Link
                    to={{
                      pathname: `/todo/update/${this.state.todo.id}`,
                    }}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
