import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import AddNewSnippet from './pages/AddNewSnippet';
import LoginPage from './pages/LoginPage';
import MyLibrary from './pages/MyLibrary';
import SignupPage from './pages/SignupPage';
import { ModalContext } from './helpers/contexts';
import { useState } from 'react';
import Navbar from './util_components/Navbar';
import Modal from './util_components/Modal';
function App() {
  const [modal_data , set_modal] = useState({
    modal_visible : false,
    modal_children : null
  });
  const set_modal_children = (visible , children)=>{
    set_modal({
      modal_visible : visible,
      modal_children : children
    })
  }
  return (
    <Router>
      <ModalContext.Provider value={[modal_data , set_modal_children]}>
        <Modal modal_visible={modal_data.modal_visible} modal_children={modal_data.modal_children}/>
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
    </ModalContext.Provider>
    </Router>
  );
}

export default App;
