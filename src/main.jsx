import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App.jsx'
import './index.css'
import { SceneIDProvider } from './Pages/SceneIDcontext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SceneIDProvider>
      <App/>
    </SceneIDProvider>
  </StrictMode>,
)
