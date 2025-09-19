import { AuthProvider } from './src/context/auth';
import { Navigation } from './src/navigations';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}