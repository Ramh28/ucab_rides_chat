import './App.css';
import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import Chat from './pages/Chat';

function GoToChatPage() {
  window.location.href = '/Chat';
}

function App() {
  return (
    <div className="App">
      <Button colorScheme="teal" variant="outline" onClick={GoToChatPage}> Ir al Chat </Button>
      <Route path="/Chat" component = {Chat} />
    </div>
  );
}

export default App;
