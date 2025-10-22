import {Route,Routes} from 'react-router-dom'
import Landing from './Pages/Landing.JSX'
function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>

    </Routes>
 
    </>
  )
}

export default App
