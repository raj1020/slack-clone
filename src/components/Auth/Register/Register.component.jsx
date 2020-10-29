import React from 'react';
import { Form, Grid, Header, Icon, Segment } from 'semantic-ui-react';


function Register() {

    const handleInput = (event) => {

    }


    return (
        <Grid>
            <Grid.Column style={{maxWidth: '500px'}}>
            <Header icon as="h2">
                <Icon name="slack" />
                Register
            </Header>
                <Form>
                    <Segment stacked>
                        <Form.Input
                            name="userName"
                            value=""
                            icon="user"
                            iconPosition="left"
                            onChange={handleInput}
                            type="text"
                            placeholder="User Name"

                        />
                        <Form.Input
                            name="email"
                            value=""
                            icon="mail"
                            iconPosition="left"
                            onChange={handleInput}
                            type="text"
                            placeholder="User Email"

                        />
                        <Form.Input
                            name="password"
                            value=""
                            icon="lock"
                            iconPosition="left"
                            onChange={handleInput}
                            type="password"
                            placeholder="User Password"

                        />
                        <Form.Input
                            name="confirmpassword"
                            value=""
                            icon="lock"
                            iconPosition="left"
                            onChange={handleInput}
                            type="password"
                            placeholder="Confirm Password"

                        />
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Register;
