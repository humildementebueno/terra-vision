import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MapView from './components/MapView'
import DataPanel from './components/DataPanel'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <div className="h-screen flex flex-col bg-black">
        <Header />

        <main className="flex-1 flex flex-col md:flex-row gap-4 p-4 overflow-hidden">
          <Sidebar />

          <div className="flex-1 flex flex-col lg:flex-row gap-4 overflow-hidden">
            <MapView />
            <DataPanel />
          </div>
        </main>
      </div>
    </AppProvider>
  )
}

export default App
