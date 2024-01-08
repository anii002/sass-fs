import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Suggestion from './components/Suggestion';
import Add from './components/Addfeedback';
import Edit from './components/Editfeedback';
import Roadmap from './components/Roadmap';
import FeedbackDetail from './components/FeedbackDetail';
import "./index.css"

const App = () => {
  return (
    <div className="App bg-[#F2F4FE]">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/suggestion' element={<Suggestion />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/feedbackdetail' element={<FeedbackDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;