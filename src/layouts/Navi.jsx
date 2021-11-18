import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi() {
    const [isAuth, setIsAuth] = useState(true)

    function handleSignOut() {
        setIsAuth(false)
    }
    function handleSignIn() {
        setIsAuth(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        <CartSummary />
                        {
                            isAuth ?
                                <SignedIn signOut={handleSignOut} /> :
                                <SignedOut signIn={handleSignIn} />
                        }
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
