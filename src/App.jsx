import { FaHeart } from 'react-icons/fa';
import Icon from './components/Icon';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h3>
        Double click on the image to{' '}
        <Icon icon={<FaHeart />} className="icon" /> it.
      </h3>
      <small>
        You liked it
        <span> 0 </span>
        times
      </small>
      <div className="loveMe"></div>
    </div>
  );
}

export default App;
