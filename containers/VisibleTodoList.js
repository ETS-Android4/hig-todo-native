import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);

    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);

    case "SHOW_ALL":
      return todos;

    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
};

const mapDispatchToProps = dispatch => {
  return { onTodoPress: id => dispatch(toggleTodo(id)) };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
