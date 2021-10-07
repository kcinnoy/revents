import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';

export default function EventDashboard() {
    return (
        <div>
            <Grid>
                <GridColumn width={10}>
                    <EventList />
                </GridColumn>
                <GridColumn width={6}>
                    <EventForm />
                </GridColumn>
            </Grid>
        </div>
    );
}
