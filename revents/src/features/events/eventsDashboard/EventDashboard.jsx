import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from './EventList';

export default function EventDashboard() {
    return (
        <div>
            <Grid>
                <GridColumn width={10}>
                    <EventList />
                </GridColumn>
                <GridColumn width={6}>Right Column</GridColumn>
            </Grid>
        </div>
    );
}
