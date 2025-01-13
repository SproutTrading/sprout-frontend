import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { EpochsProvider } from './context/EpochsContext';
import { ResourcesProvider } from './context/ResourcesContext';

function App() {
  return (
    <BrowserRouter>
      <ResourcesProvider>
        <EpochsProvider>
          <AppRoutes />
        </EpochsProvider>
      </ResourcesProvider>
    </BrowserRouter>
  );
}

export default App;