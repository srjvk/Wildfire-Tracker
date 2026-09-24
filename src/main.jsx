
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'
import Navbar from '../componenets/Nabar'


createRoot(document.getElementById('root')).render(
  <>
  <div>
    <Navbar />
    <App />
  </div>
  </>

)
