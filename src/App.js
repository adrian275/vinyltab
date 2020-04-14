import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
    </Provider>
  );
}

export default App;
