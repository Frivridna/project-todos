import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const Counter = () => {
  const allToDos = useSelector((store) => store.todos.items)
  
  const dispatch = useDispatch()
  
  const onCheckAll = () => {
    dispatch(todos.actions.markAllTodos())
  }
  
  const completedTodos = allToDos.filter((todo) => todo.isComplete)

  return (
    <Container>
      <CompletedTodos>
        {completedTodos.length} / {allToDos.length}
      </CompletedTodos>
      <ClearAllContainer>
        <ClearAllButton
          type="button"
          onClick={onCheckAll}>
            <Delete src="assets/doubletick.png"></Delete>
        </ClearAllButton>
        <AllDone>
          MARK ALL AS DONE
        </AllDone>
      </ClearAllContainer>
    </Container>
  )
}

// Local styling
const Container = styled.div`
  color: #565656;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CompletedTodos = styled.p`
  font-weight: 700;
  font-size: 20px;
`
const ClearAllContainer = styled.div`
  display: flex; 
  flex-direction: row;
`;

const ClearAllButton = styled.button`
  width: 40px;
  height: 40px;
  border: none; 
  border-radius: 50%;
  transition: 0.3s ease;
  background-color: transparent;
  &:hover {
    transform: scale(1.3);
  }
`;

const Delete = styled.img`
  width: 30px;
  height: 30px;
`; 

const AllDone = styled.p`
  font-size: 14px;
`;

export default Counter
