import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={} />
      </Switch>
    </>
  );
}

export default App;
