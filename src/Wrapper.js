import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

export default function Wrapper(){
    return(

        <div className='' > 
        <Navbar />
        
        <BrowserRouter>
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<App />} />

          {/* ADD ADDITONAL ROUTES here ex swap page */}

          

        </Routes>
      </BrowserRouter>
      </div>




    );
}
