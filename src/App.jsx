import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Page404 from './Pages/Page404'
import { Toaster } from 'sonner'
import { myContext } from './context/MyContext';

const appName = "BREUKH-APP"

function App() {
  return (
    <myContext.Provider value={appName}>
      <Toaster 
        // closeButton={true}
        toastOptions={{
          // style: {
          //   background: '#777',
          // },
          className: 'text-white bg-indigo-500',
      }}/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/create' element={<Create/>} />
              <Route path='*' element={<Page404/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </myContext.Provider>
  )
}

export default App
