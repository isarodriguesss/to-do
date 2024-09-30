import './App.css'
import Home from './pages/Home'
import EditTask from './pages/EditTask'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='edit/:id' element={<EditTask/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}


