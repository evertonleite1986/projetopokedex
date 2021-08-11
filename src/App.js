import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardList from './Cardlist';
import Info from './Info';
import './Styles/main.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={CardList}/>
          <Route path="/info/:id" component={Info}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
