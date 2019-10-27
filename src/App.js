import React from 'react';
import DashBoardComponent from './modules/DashBoard/components/DashBooardComponent';
import NavigationCoomponent from './modules/Navigation/components/NavigationComponent';

function App() {
  return (
    <div className="App">
      <NavigationCoomponent />
      <DashBoardComponent />
    </div>
  );
}

export default App;
