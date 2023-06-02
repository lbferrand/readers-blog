import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlePage from './Pages/ArticlePage';
import ArticlesListPage from './Pages/ArticlesListPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className="App">
          <NavBar />
          <div id='page-body'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/articles' element={<ArticlesListPage />} />
              <Route path='/articles/:articleId' element={<ArticlePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes> 
          </div>
        </div>
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;

