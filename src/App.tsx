import { DashboardContextProvider } from "./Contexts/DashBoardContext"
import Dashboard from "./ui/templates/Dashboard"

function App() {
  return (
    <DashboardContextProvider>      
      <Dashboard /> 
    </DashboardContextProvider>


  )
}

export default App
