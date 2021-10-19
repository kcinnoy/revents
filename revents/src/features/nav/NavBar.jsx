import React, { useState } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function NavBar({ setFormOpen }) {

    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignOut(){
        setAuthenticated(false);
        history.push('/');
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
                    Re-vents
                </Menu.Item>
                <Menu.Item name='Events' as={NavLink} to='/events' />
                <Menu.Item name='Sandbox' as={NavLink} to='/sandbox' />
                {authenticated && (
                    <Menu.Item as={NavLink} to='/createEvent'>
                        <Button
                            positive
                            inverted
                            content='Create Events'
                        />
                    </Menu.Item>
                )}
                {authenticated ? (
                    <SignedInMenu signOut={handleSignOut} />
                ) : (
                    <SignedOutMenu setAuthenticated={setAuthenticated} />
                )}
            </Container>
        </Menu>
    );
}
