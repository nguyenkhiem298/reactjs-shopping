import './App.css';
// import Products from './components/products/Products'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Nav from './components/app1/nav/Nav'
// import Header from './components/app1/nav/Header'
// import PortfolioSection from './components/app1/content/PortfolioSection'
// import ContactSection from './components/app1/content/ContactSection'
// import AboutSection from './components/app1/content/AboutSection'

// import Comp2 from './components/test1/Comp2'
import { BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import routers from './components/router_test/router/routers';
import Nav from './components/router_test/nav/Nav';



function App() {
  return (
      <Router>
        <Switch>
          {
            routers.map( (item, index) => (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component= {(props) => {
                  return (
                    <item.layout {...props}>
                      <item.component {...props}/>
                    </item.layout>
                  )
                }}
                />
              ))
          }
        </Switch>
      </Router>
  );
}

export default App;
