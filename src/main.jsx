import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import '../node_modules/boostrap/d'
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// import 'bootstrap-icons/font/bootstrap-icons.css';
// const user=JSON.parse(localStorage.getItem("user"))
// import '../node_modules/b'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
   
   <Routes>
   <Route path='/' element={user?.token?<App />:<SignIn/>} />
    {/* <Route path='/categories' element={user?.token?<Categories />:<SignIn/>} />
    <Route path='/tasks' element={user?.token?<Tasks />:<SignIn/>} />
  <Route path='/signin' element={<SignIn />}/> */}
   </Routes>
 
   </BrowserRouter>
  </React.StrictMode>
)
