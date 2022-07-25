import './App.css';
import Header from './component/HeaderComponent/Header'; 
import Footer from './component/FooterComponent/Footer';
import './_aem-grid-12.scss';


function App(props) {
  return (
    <div className="App">
    <Header />
          {props.children}
    <Footer />
    </div>
  );
}

export default App;
