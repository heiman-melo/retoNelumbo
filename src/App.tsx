import { AppRouterProvider } from '../src/routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header'

function App() {

  return (
    <>
    <Header/>
    <BrowserRouter basename="/">
      <AppRouterProvider />
    </BrowserRouter>
    </>

  )
}

export default App
