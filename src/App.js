import './App.css';
// import Products from './components/products/Products'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Nav from './components/app1/nav/Nav'
// import Header from './components/app1/nav/Header'
// import PortfolioSection from './components/app1/content/PortfolioSection'
// import ContactSection from './components/app1/content/ContactSection'
// import AboutSection from './components/app1/content/AboutSection'

import Comp2 from './components/test1/Comp2'


function App() {
  return (
    <div className="container">
      <div className="row">
        <Comp2/>
        <Comp2/>
        <Comp2/>
        <Comp2/>
        <Comp2/>
      </div>
    </div>
  );
}

export default App;
