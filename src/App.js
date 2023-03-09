import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import AboutPage from './Pages/AboutPage';
import Navbar from './UI/Navbar/Navbar/Navbar' ;
import NewsItemPage from './Pages/NewsItemPage';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar />
    <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/news' element={<HomePage />}/>
          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path="/news/:id" element={<NewsItemPage />} />
           </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
