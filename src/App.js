import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import History from './pages/History';
import Navigation from './components/Nav';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/play" element={<Main />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Navigation />
    </main>
  );
}

export default App;
