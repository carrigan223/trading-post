import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route, Switch, Redirect } from 'react-router'
import './App.css'
import HomePage from './view-components/homepage/homepage'
import ShopPage from './view-components/shoppage/shop'
import SignInAndSignUpPage from './view-components/signinpage/signinpage'
import Header from './components/header/header'
import { auth, createUserProfileDocument } from '../src/firebase/firbase.utils'
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector'

class App extends React.Component {
    unsubscribeFromAuth = null

    //adjusting state of user based on listening
    //to oauth, open subscription, whenever any changes occur related to this
    //app a message is sent through firebase, as long as APP is mounted on DOM
    //this subscription is open
    componentDidMount() {
        const { setCurrentUser } = this.props
        //checking for auth state change
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            //if userAuth is not null
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    })
                })
            }
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        console.log(this.props.currentUser)
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
