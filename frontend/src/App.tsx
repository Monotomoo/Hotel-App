import { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import Console from './Console';

function App() {
  const [view, setView] = useState<'welcome' | 'console'>('welcome');

  return (
    <div className="w-screen h-screen overflow-hidden bg-brand-900 text-white font-sans selection:bg-brand-primary selection:text-white">
      {view === 'welcome' ? (
        <WelcomeScreen onCheckIn={() => setView('console')} />
      ) : (
        <Console onBack={() => setView('welcome')} />
      )}
    </div>
  );
}

export default App;
