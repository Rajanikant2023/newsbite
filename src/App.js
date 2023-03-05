// import { Home } from '@mui/icons-material'
import { CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {  SearchFeed } from './components'
import { HomePage, SearchPage } from './pages'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <CssBaseline/>
      <Box>
      
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
         <Route path='/:searchItem' element={<SearchPage/>}/>
       </Routes>
       </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
