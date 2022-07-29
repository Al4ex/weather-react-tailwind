
import All from './components/All';
import { ClimaProvider } from './context/ClimaProvier';

function App() {

  return (
    <ClimaProvider>
      <All/>

    </ClimaProvider>
  );
}

export default App
