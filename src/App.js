import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';



function App() {
	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/" exact element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
