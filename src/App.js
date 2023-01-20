import './App.css';
import Head from './components/head'
import {Provider}from 'react-redux'
import store from './redux/store';
import Sign from './components/sign';
function App() {
  return (
    <div>
      <Provider store={store}>
      <Sign/>
      </Provider>
    </div>
  );
}

export default App;
