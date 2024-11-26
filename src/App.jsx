import './App.css';
import { Error } from './components/Error/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Article } from './components/Article/Article';
import { Dissertation } from './components/Dissertation/Dissertation';
import { Presentation } from './components/Presentation/Presentation';
import { Tasks } from './components/Tasks/Tasks';
import { Tests } from './components/Tests/Tests'
import { Main } from './components/Main/Main';
import { Row, Col } from 'antd';
import MainPage from './components/MainPage/MainPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Main />} errorElement={<Error />} > */}
        <Route path='/' element={<Main />} >
          <Route index element={<MainPage />} />
          <Route path='article' element={<Article />} />
          <Route path='dissertation' element={<Dissertation />} />
          <Route path='presentation' element={< Presentation />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='tests' element={<Tests />} />
          <Route path='*' element={<Error />} /> {/* Маршрут для обработки ошибок */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;