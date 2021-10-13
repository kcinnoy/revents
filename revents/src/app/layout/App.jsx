import React from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventsDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailPage from '../../features/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';

function App() {

    return (
        <>
            <Route exact path='/' component={HomePage} />
            <Route
                path={'/(.+)'}
                render={() => (
                    <>
                        <NavBar />
                        <Container className='main'>
                            <Route exact path='/events' component={EventDashboard} />
                            <Route exact path='/sandbox' component={Sandbox} />
                            <Route path='/events/:id' component={EventDetailPage} />
                            <Route path={['/createEvent','/manage/:id']} component={EventForm} />
                        </Container>
                    </>
                )}
            />
        </>
    );
}

export default App;
