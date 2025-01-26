import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Page404 from './Pages/Page404'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/create' element={<Create/>} />
            <Route path='*' element={<Page404/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
