import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {


  return (
    <>
      <NavBar />
      <br />
      <ItemListContainer greetings={"Namasté! bienvenidxs!"}/>
      <br />
      <h5 class="d-flex justify-content-center">Tenés pasión por el té? Éste es tu lugar!</h5>
      <br />
      <h2 class="d-flex justify-content-center"><img src="public/drinkingtea.png" alt=""></img></h2>
    </>
  )
}

export default App
