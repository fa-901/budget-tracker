import './styles/styles.scss'; 
import Budget from './components/Budget';

function App() {
	return (
		<div className="container d-flex flex-column h-100 py-3">
			<h1 className='text-center form-group'>
				Budget Planner
			</h1>
			<div className='row mb-4'>
				<div className='col-md-4'>
					<Budget />
				</div>
				<div className='col-md-4'>
					<Budget />
				</div>
				<div className='col-md-4'>
					<Budget />
				</div>
			</div>
			<div className="text-center mt-auto form-text text-muted">
				<small>Created by <a href="https://github.com/fa-901" rel='noopener noreferrer' target="_blank">fa-901</a></small>
			</div>
		</div>
	);
}

export default App;
