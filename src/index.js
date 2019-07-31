import React from "react";
import ReactDOM from "react-dom";

class TodoApp extends React.Component {
  constructor() {
    super(); // конструктор из React.Component

    // Исходное состояние нашего приложения
    this.state = {
      todos: [
        { name: "Настроить webpack", checked: true },
        { name: "Запустить webpack-dev-server", checked: true },
        { name: "Написать TodoApp", checked: false }
      ],
      newTodoText: ""
    };
  }

  toggleTodo(key) {
    const todos = this.state.todos.map((todo, i) => {
      if (key === i) {
        return {
          name: todo.name,
          checked: !todo.checked
        };
      } else {
        return todo;
      }
    });

    // Обновляем состояние приложения
    this.setState({ todos });
  }

  addTodo() {
    const todos = this.state.todos;
    todos.push({
      name: this.state.newTodoText,
      checked: false
    });
    this.setState({ todos, newTodoText: "" });
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <ol>
          {this.state.todos.map((todo, i) => {
            const className = todo.checked ? "checked" : "";

            return (
              <li
                key={i}
                className={className}
                onClick={ev => {
                  this.toggleTodo(i);
                }}
              >
                {todo.name}
              </li>
            );
          })}
        </ol>

        <input
          type="text"
          placeholder="Новая задача"
          value={this.state.newTodoText}
          onChange={ev => {
            this.setState({ newTodoText: ev.target.value });
          }}
          onKeyUp={ev => {
            if (ev.keyCode === 13) {
              this.addTodo();
            }
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"));
