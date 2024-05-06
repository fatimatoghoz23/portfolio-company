import './App.css';
import Home from './Pages/Home/Home';

import { Routes ,Route, BrowserRouter} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar';
function App() {
  
return(
  <>

  <BrowserRouter>
  <Navbar/>

  <Routes>
   <Route exact Component={Home} path='/' />
   

   {/* <Home/>
  <About/>
  <Sections/>
  <Slider/>
  <Contact/>
  <Join/> */}
   </Routes>
  
  </BrowserRouter>
 
  </>
)



  
 
  };
export default App;
