import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from './pages/mainPage/MainPage';
import Posts from './pages/posts/Posts';
import Header from './components/header/Header';
import { store } from './store/store';
import './App.scss';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/posts/:userId" element={<Posts />}></Route>
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
