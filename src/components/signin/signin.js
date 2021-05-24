import React from 'react'
import FormInput from '../forminput/forminput'
import CustomButton from '../custombutton/custombutton'

import './signin.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target
        //this is dynamicly setting the property values,
        //taking in the name and value , ex password or email
        //using a single function
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">Already Have an Account?</h2>
                <span className="title">Sign in with E-mail and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn
