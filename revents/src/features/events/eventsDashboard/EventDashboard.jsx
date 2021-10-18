import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector } from 'react-redux';

export default function EventDashboard({}) {
  const {events} = useSelector(state => state.event);

    // function handleCreateEvent(event) {
    //     setEvents([...events, event]);
    // }

    // function handleUpdateEvent(updatedEvent) {
    //     setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
    // }

    function handleDeleteEvent(eventId) {
        // setEvents(events.filter(evt => evt.id !== eventId));
    }

    return (
        <div>
            <Grid>
                <GridColumn width={10}>
                    <EventList events={events} deleteEvent={handleDeleteEvent} />
                </GridColumn>
                <GridColumn width={6}>
                    <h2>Event filters</h2>
                </GridColumn>
            </Grid>
        </div>
    );
}
