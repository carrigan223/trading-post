import React from 'react'
import { Route, Switch } from 'react-router'
import './App.css'
import HomePage from './view-components/homepage/homepage'
import ShopPage from './view-components/shoppage/shop'
import Header from './components/header/header'

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    )
}

export default App
