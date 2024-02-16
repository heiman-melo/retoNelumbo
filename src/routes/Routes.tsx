import { Route, Routes } from 'react-router-dom'
import Dasboard from '../pages/Dasboard'
import Sobremi from '../pages/sobremi'

export const AppRouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Dasboard/>} />
      <Route path="/sobremi" element={<Sobremi/>} />
    </Routes>
  )
}
