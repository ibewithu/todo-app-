// import './App.css';
import { Header } from './myComponents/Header'
import { Todos } from './myComponents/Todos'
import { Footer } from './myComponents/Footer'
import { AddTodo } from './myComponents/AddTodo'
import { About } from './myComponents/About'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

function App() {
	useFirestoreConnect([{ collection: 'todo', orderBy: ['createdAt', 'desc'] }]);
	const todos = useSelector(state => state.firestore.ordered.todo);
	console.log(todos)

	return (
		<div>
			<Router>
				<Header title="My Todos List" setSearchBar={true} />
				{/* <Header title={45} setSearchBar={true} /> */}
				<Switch>
					<Route path="/About">
						<About />
					</Route>
					<Route path="/Todos">
						<Todos todos={todos} />
					</Route>
					<Route exact path="/">
						<AddTodo />
						<Todos todos={todos} />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
