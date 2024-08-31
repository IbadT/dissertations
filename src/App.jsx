import './App.css';
import { Error } from './components/Error/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Article } from './components/Article/Article';
import { Dissertation } from './components/Dissertation/Dissertation';
import { Presentation } from './components/Presentation/Presentation';
import { Tasks } from './components/Tasks/Tasks';
import { Tests } from './components/Tests/Tests'
import { Main } from './components/Main/Main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} errorElement={<Error />} >
          <Route index element={<div>No page is selected.</div>} />
          <Route path='article' element={<Article />} errorElement={<Error />} />
          <Route path='dissertation' element={<Dissertation />} errorElement={<Error />} />
          <Route path='presentation' element={< Presentation />} errorElement={<Error />} />
          <Route path='tasks' element={<Tasks />} errorElement={<Error />} />
          <Route path='tests' element={<Tests />} errorElement={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};


export default App
