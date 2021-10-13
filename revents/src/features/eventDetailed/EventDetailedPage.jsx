import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailderHeader from './EventDetailderHeader';
import EventDetailderInfo from './EventDetailedInfo';
import EventDetailderChat from './EventDetailedChat';
import EventDetailderSidebar from './EventDetailedSidebar';

export default function EventDetailedPage() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailderHeader />
                <EventDetailderInfo />
                <EventDetailderChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailderSidebar />
            </Grid.Column>
        </Grid>
    );
}
