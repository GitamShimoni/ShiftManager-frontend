import './App.css'
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Workernavbar from './components/WorkerComponents/Workernavbar';
import Phonelist from './components/WorkerComponents/Phonelist';
import Availability from './components/WorkerComponents/Availability';
import Report from './components/WorkerComponents/Report';
import Managernavbar from './components/ManagerComponents/Managernavbar';
import Confirmationpage from './components/ManagerComponents/Confirmationpage';
import HistoryPage from './components/ManagerComponents/HistoryPage';
import Usercontroller from './components/ManagerComponents/Usercontroller';
function App() {
 
  return (
    <div className='appmain-container'>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="Worker" element={<Workernavbar/>}>
          <Route index element={<Availability/>} />
          <Route path="phonelist" element={<Phonelist/>} />
          <Route path="Report" element={<Report/>} />
        </Route>
        <Route path="Manager" element={<Managernavbar/>}>
          <Route index element={<Confirmationpage/>} />
          <Route path="History" element={<HistoryPage/>} />
          <Route path="phonelist" element={<Phonelist/>} />
          <Route path="UserController" element={<Usercontroller/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
