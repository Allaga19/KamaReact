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
					<Route path='/dialogs' 
						render={ () => <Dialogs state={props.state.dialogsPage} /> } />
							
							{/* // dialogs={props.state.dialogsPage.dialogs} 
							// messages={props.state.dialogsPage.messages}  */}
						
					<Route path='/profile' 
						render={ () => <Profile state={props.state.profilePage} /> } />
							
							{/* // posts={props.state.profilePage.posts}  */}
						
				</div>
			</div>
		</BrowserRouter>
	); 
}



export default App;
