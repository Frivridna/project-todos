import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

import todos from '../reducers/todos'
import { Container, Header, CheckboxContainer, TodoList, TodoDescription } from '../styling/GlobalStyles'

const TodoOther = () => {
  const allTodos = useSelector((store) => store.todos)
  const justOtherTodos = allTodos.items.filter((item) => item.category === "Other")

  const dispatch = useDispatch()

  return (
    <Container>
      <Header>Other</Header>
      <TodoList>
        {justOtherTodos.map(todo => (
          <CheckboxContainer key={todo.id}>
            <Checkbox
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              color="default"
            />
            <TodoDescription>{todo.description}</TodoDescription>
            <p>{format(new Date(), 'MMMM do yyyy')}</p>
            <DeleteOutlinedIcon 
              onClick={() => dispatch(todos.actions.removeToDo(todo.id))} />
          </CheckboxContainer>
        ))}
      </TodoList>
    </Container>
  )
}

export default TodoOther