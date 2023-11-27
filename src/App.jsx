import { RouterProvider } from 'react-router-dom'
import { routes } from './router'
import { StockContextProvider } from './context/StockContext'

function App() {
  return(
    <StockContextProvider>
      <RouterProvider  router={routes} />
    </StockContextProvider>
  )
}

export default App
