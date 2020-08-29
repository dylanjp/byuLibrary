import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import RatingComponent from './RatingComponent'

class BYUGithubComponent extends Component {
    render() {
        return(
            <div className="BYUGithub">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={WelcomeComponent}/>
                        <Route path="/rate" exact component={RatingComponent}/>

                        <Route component={ErrorComponent}/>
                     </Switch>
                     <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

function ErrorComponent() {   
        return <div>You got lost! Sorry! 404</div>
}

export default BYUGithubComponent