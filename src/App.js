import './App.css';
import Rating from './components/Rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Rating />
      <ToastContainer />
    </div>
  );
}

export default App;
