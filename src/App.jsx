import Header from './components/Header/Header';

import './App.css'

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <center>
        <h1>My AI Journey Begins</h1>
        <p>{currentYear}</p>
      </center>
    </>
  )
}

export default App;
