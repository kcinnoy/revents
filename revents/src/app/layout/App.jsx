import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventsDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

function App() {
  return (
    <>
      <NavBar/>
        <Container className='main'>
            <EventDashboard/>
        </Container>
    </>
  );
}

export default App;
