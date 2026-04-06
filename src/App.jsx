import AppHeader from './components/Header/AppHeader';
import AppFooter from './components/footer/AppFooter';

import './App.css'


function Sidebar(){
  return(
    <div className="sidebar">
    <h3>Sidebar</h3>
    </div>
  );
}
function  App() {

  return (
    <>
      <AppHeader />
    
          <center>
            <h2>Hello Team ,Thank You for attending React Js Traning program</h2>
          </center>
     <Sidebar />
      <AppFooter />
    </>
  )
}

export default App;
