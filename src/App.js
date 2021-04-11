import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/NavBar';
import Profile from './components/Profile';


//объявляем переменную и присваиваем ей стрелочную функцию
const App = () => {
  return (
    <div className='app-wrapper'>
		<Header />
		<Nav />
		<Profile />
    </div>
  );
}



export default App;
