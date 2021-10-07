import React from 'react';
import { Button } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventsDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

function App() {
  return (
    <div >
      <NavBar/>
      <Button icon='user' content='React Button' color='green' />
      <EventDashboard/>
    </div>
  );
}

export default App;
