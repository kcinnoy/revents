import React from 'react'
import { Menu, MenuItem, Container, Button } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo"/>
          Re-vents
        </Menu.Item>
        <Menu.Item name='Events'/>
        <Menu.Item>
          <Button positive inverted content='Create Events'/>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='login'/>
          <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
        </Menu.Item>
      </Container>

    </Menu>
  )
}
