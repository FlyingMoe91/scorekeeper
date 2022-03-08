import Input from './components/Input';
import Button from './components/Button';
// import Player from './components/Player'

function App() {
  return (
    <main>
      <Input label="Name fo game" placeholder="e.g. Carcassonne" />
      <Input label="Player nanmes" placeholder="e.g. Jon Doe, Jane Doe" />
      <Button children="Create game" />
      <Button children="Play" isDark="true" />
      <Button children="History" />
    </main>
  );
}

export default App;
