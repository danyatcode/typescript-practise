import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserPage } from './components/UserPage'
import { TodosPage } from './components/TodosPage'
import { Link } from 'react-router-dom'
import { UserItemPage } from './components/UserItemPage'
import { TodoItemPage } from './components/TodoItemPage'


function App() {

  return (
    <div className="App" style={{display: "flex",flexDirection: "column", alignItems: "center", gap: "100px"}}>
      <BrowserRouter>
        <div className='header'>
            <Link to="/users" style={{marginRight: 15, textTransform: "uppercase"}}>users</Link>
            <Link to="/todos" style={{textTransform: "uppercase"}}>todos</Link>
        </div>
        <Routes>
          <Route path='/users' element={<UserPage />}/>
          <Route path='/todos' element={<TodosPage />}/>
          <Route path='/user/:userID' element={<UserItemPage />}/>
          <Route path='/todo/:todoID' element={<TodoItemPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
