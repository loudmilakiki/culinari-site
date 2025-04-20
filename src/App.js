import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:category" element={<RecipePage />} />
        <Route path="/recipes/:category/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
