import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventsDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import {Route} from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailPage from '../../features/eventDetailed/EventDetailPage';
import EventForm from '../../features/events/eventForm/EventForm';


function App() {
    const [formOpen, setFormOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    function handleSelectedEvent(event) {
        setSelectedEvent(event);
        setFormOpen(true);
    }

    function handleCreateFormOpen(event) {
        setSelectedEvent(null);
        setFormOpen(true);
    }

    return (
        <>
            <NavBar setFormOpen={handleCreateFormOpen} />
            <Container className='main'>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailPage} />
                <Route path='/createEvent' component={EventForm} />
            </Container>
        </>
    );
}

export default App;
