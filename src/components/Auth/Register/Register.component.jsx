import React, {useState} from 'react';
import { Form, Grid, Header, Icon, Segment, Button, Message } from 'semantic-ui-react';


function Register() {

    let user= {
        userName:'',
        email:'',
        password:'',
        confirmpassword:''
    }
    let errors = [];
    const [userState, setuserState] = useState(user);
    const [errorState, seterrorState] = useState(errors);

    const handleInput = (event) => {
        
        
       setuserState((currentState) => {
            
            return {...currentState, [event.target.name]: event.target.value}
        })
        
        
       
    }

    

    const checkForm = () => {
        if(isFormEmpty()) {
           
            seterrorState((error) => {
               return error.concat({message: "Please fill all the fields."})
            })
            return false;
        }else if(!checkPassword()) {
           
            return false;
        } 
        else {
            return true;
        }
    }

    const isFormEmpty = () => {
       
        return !userState.userName.length || !userState.password.length || !userState.confirmpassword.length || !userState.email.length;
        
       

    }



    const checkPassword = () => {
        
        if(userState.password.length<8) {
            seterrorState((error) => error.concat({message: "Password length should be equal to or greater than 8"}))
            return false;
        } else if (userState.password !== userState.confirmpassword) {
            seterrorState((error) => {
                return error.concat({message: "Password and Confirm Password do not match."})
            })
            return false
        } else {
            return true;
        }
    }

    const onSubmit = (event) => {
        seterrorState(() => []);
        
        if (checkForm()) {
            
        } else {

        }

    }

    const formaterrors = () => {
        return errorState.map((error, index) =>  <p key={index}>{error.message}</p>)
    }




    return (
        <Grid>
            <Grid.Column style={{maxWidth: '500px'}}>
            <Header icon as="h2">
                <Icon name="slack" />
                Register
            </Header>
                <Form onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input
                            name="userName"
                            value={useState.userName}
                            icon="user"
                            iconPosition="left"
                            onChange={handleInput}
                            type="text"
                            placeholder="User Name"

                        />
                        <Form.Input
                            name="email"
                            value={userState.email}
                            icon="mail"
                            iconPosition="left"
                            onChange={handleInput}
                            type="text"
                            placeholder="User Email"

                        />
                        <Form.Input
                            name="password"
                            value={userState.password}
                            icon="lock"
                            iconPosition="left"
                            onChange={handleInput}
                            type="password"
                            placeholder="User Password"

                        />
                        <Form.Input
                            name="confirmpassword"
                            value={userState.confirmpassword}
                            icon="lock"
                            iconPosition="left"
                            onChange={handleInput}
                            type="password"
                            placeholder="Confirm Password"

                        />
                    </Segment>
                    <Button>Submit</Button>
                </Form>
                {errorState.length > 0 && <Message error>
                    <h3>Errors</h3>
                    {formaterrors()}
                </Message> }
            </Grid.Column>
        </Grid>
    )
}

export default Register;
