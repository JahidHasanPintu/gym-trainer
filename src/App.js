import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      
      <Banner></Banner>
      <Header></Header>
      <Services></Services>
      <Footer></Footer>

    </div>
  );
}

export default App;
