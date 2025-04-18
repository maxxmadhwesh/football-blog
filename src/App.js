import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
