import Counter from "./components/Counter"
import { Game } from "./components/TicTacToe.tsx/Game"
import TodoList from "./components/TodoList"


function App() {

  return (
    <>
      <h1>Zustand</h1>
      <Counter />
      <TodoList />
      <Game /> 
    </>
  )
}

export default App
