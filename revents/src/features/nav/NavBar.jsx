import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


export default function NavBar({setFormOpen}) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
                    Re-vents
                </Menu.Item>
                <Menu.Item name='Events' as={NavLink} to='/events'  />
                <Menu.Item as={NavLink} to='/createEvent'>
                    <Button positive inverted content onClick={() => setFormOpen(true)} content='Create Events' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='login' />
                    <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
                </Menu.Item>
            </Container>
        </Menu>
    );
}
