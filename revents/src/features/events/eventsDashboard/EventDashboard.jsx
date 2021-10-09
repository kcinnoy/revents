import React, { useState } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }) {
    const [events, setEvents] = useState(sampleData);
  

    function handleCreateEvent(event) {
        setEvents([...events, event]);
    }

    return (
        <div>
            <Grid>
                <GridColumn width={10}>
                    <EventList events={events} selectEvent={selectEvent} />
                </GridColumn>
                <GridColumn width={6}>
                    {/* {formOpen && <EventForm setFormOpen={setFormOpen} />} */}
                    {formOpen && (
                        <EventForm
                            setFormOpen={setFormOpen}
                            setEvents={setEvents}
                            createEvent={handleCreateEvent}
                            selectedEvent={selectedEvent}
                            key={selectedEvent ? selectedEvent.id : null }
                        />
                    )}
                </GridColumn>
            </Grid>
        </div>
    );
}
