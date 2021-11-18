import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={props.signIn} primary>Giris Yap</Button>
                <Button primary style={{marginLeft:'0.5em'}}>Uye Ol</Button>
            </Menu.Item>
        </div>
    )
}
