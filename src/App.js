import React from 'react'
import { Route, Switch } from 'react-router'
import './App.css'
import HomePage from './view-components/homepage/homepage'
import ShopPage from './view-components/shoppage/shop'
import SignInAndSignUpPage from './view-components/signinpage/signinpage'
import Header from './components/header/header'
import { auth, createUserProfileDocument } from '../src/firebase/firbase.utils'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null

    //adjusting state of user based on listening
    //to oauth, open subscription, whenever any changes occur related to this
    //app a message is sent through firebase, as long as APP is mounted on DOM
    //this subscription is open
    componentDidMount() {
        //checking for auth state change
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            //if userAuth is not null
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot((snapshot) => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        },
                    })
                })
            }
            this.setState({ currentUser: userAuth })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUpPage} />
                </Switch>
            </div>
        )
    }
}

export default App
