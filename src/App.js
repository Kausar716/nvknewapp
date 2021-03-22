 // import logo from './logo.svg';
// import './App.css';
import SignIn from './components/SignIn'
import UserList from './components/UserList'
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from 'react-redux';
import store from './store.js';
import ItemModal from './components/UserList/ItemModal' ;
import {Container} from 'reactstrap'
import Sidebar from './components/Sidebar';
import ForgotPassowrd from './components/SignIn/ForgotPassword'
import Navbar from './components/NavBar';
import Dashboard from './components/Dashboard';
// import Sidebar from './components/Sidebar'


const data = true;

function App() {
  return (
    <Provider store={store}>
      <>
	  
      <Sidebar/>
		
   
      </>
      </Provider>
  );
}

export default App;