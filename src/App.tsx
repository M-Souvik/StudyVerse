
import { Outlet } from 'react-router-dom';
import AppRoutes from './router';

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <main>

    <Outlet/>
      </main>
<AppRoutes/>
    </div>
  );
}

export default App;