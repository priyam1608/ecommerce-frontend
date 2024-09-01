import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRoutes from './routes/CustomerRoutes';

function App() {
  return (
    <div>
      <Routes>
        {/* for customer side */}
        <Route path='/*' element={<CustomerRoutes/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
