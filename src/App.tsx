import '@/App.css'
import Emulator from '@/components/emulator.tsx'
import EmulatorControl from '@/components/emulatorControl.jsx'

function App() {
  return (
    <div className='container m-auto'>
      <div className='flex h-screen items-center justify-center max-w-screen-xl mx-auto'>
        <EmulatorControl />
        <div className='divider divider-horizontal'></div>
        <div className='grow'>
          <Emulator />
        </div>
      </div>
    </div>
  )
}

export default App
