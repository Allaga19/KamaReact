import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

// let SomeComponent = () => <Dialogs />
//объявляем переменную и присваиваем ей стрелочную функцию
const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					{/* <Route exact path='/dialogs' component={Dialogs} />
					<Route path='/profile' component={Profile} /> */}
					{/* или  */}
					<Route path='/dialogs' render={ () => <Dialogs /> } />
					<Route path='/profile' render={ () => <Profile /> } />
					{/* или  */}
					{/* <Route path='/dialogs' render={ SomeComponent } />
					<Route path='/profile' render={ () => <Profile /> } /> */}
				</div>
			</div>
		</BrowserRouter>
	);
}



export default App;
