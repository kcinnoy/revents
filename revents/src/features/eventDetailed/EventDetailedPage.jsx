import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailderHeader from './EventDetailderHeader';
import EventDetailderInfo from './EventDetailedInfo';
import EventDetailderChat from './EventDetailedChat';
import EventDetailderSidebar from './EventDetailedSidebar';
import { useSelector } from 'react-redux';

export default function EventDetailedPage({match}) {
    const event = useSelector(state => state.event.events.find(e => e.id == match.params.id));

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailderHeader event={event} />
                <EventDetailderInfo event={event} />
                <EventDetailderChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailderSidebar attendees={event.attendees} />
            </Grid.Column>
        </Grid>
    );
}
