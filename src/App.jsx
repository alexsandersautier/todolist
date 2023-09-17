import './App.scss'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
function App() {

  return (
    <div className="App">
      <Header/>
      <div className="App__title">
        <h1>Optimize your time and get organized with our Daily Planner.</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default App
