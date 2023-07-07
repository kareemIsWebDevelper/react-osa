import { Home } from './pages/Home';
import {useState} from "react";
import {Footer} from './components/Footer';
import { Navbar } from './components/Navbar';
export const App = () => {

  const [toggle, setToggle]
      = useState<boolean>(false);

  return (
   <>
     <div className='py-12'>
      <Navbar 
        toggle={toggle} 
        setToggle={setToggle} 
      />
     <div id="wrapper">
         <Home toggle={!toggle} />
     </div>
    </div>
    <Footer toggle={!toggle} />
   </>
  )
}