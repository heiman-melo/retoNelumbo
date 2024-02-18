import { Route, Routes } from 'react-router-dom'
import Dasboard from '../pages/Dasboard'
import Detail from '../pages/detail'

export const AppRouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Dasboard/>}/>
      <Route path="/detail" element={<Detail/>}/>
    </Routes>
  )
}
