import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import AddNewSnippet from './pages/AddNewSnippet';
import LoginPage from './pages/LoginPage';
import MyLibrary from './pages/MyLibrary';
import SignupPage from './pages/SignupPage';
import Navbar from './util_components/Navbar';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/signup">
          <SignupPage/>
        </Route>
        <Route path="/">
          <Navbar/>
          <Route exact path="/">
            <h1>Homepage</h1>
          </Route>
          <Route exact path="/library">
            <MyLibrary/>
          </Route>
          <Route exact path="/add-new">
            <AddNewSnippet/>
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
