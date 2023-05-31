import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlePage from './Pages/ArticlePage';
import ArticlesListPage from './Pages/ArticlesListPage';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className="App">
          <h1>My Awesome Blog</h1>
          <div id='page-body'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/articles' element={<ArticlesListPage />} />
              <Route path='/articles/:articleId' element={<ArticlePage />} />
            </Routes> 
          </div>
        </div>
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
