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
            <HomePage />
            <AboutPage />
            <ArticlesListPage />
            <ArticlePage />
          </div>
        </div>
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
