import logo from './logo.svg';
import './App.css';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import ExpandableTopic from './components/ExpandableTopic.jsx'


function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
