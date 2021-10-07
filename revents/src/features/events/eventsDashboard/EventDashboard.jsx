import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react';

export default function EventDashboard() {
  return (
    <div>
      <Grid>
        <GridColumn width={10}>
          Left Column
        </GridColumn>    
        <GridColumn width={6}>
          Right Column
        </GridColumn>
      </Grid>
    </div>
  )
}

