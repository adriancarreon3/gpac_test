import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage } from '../components/auth/LoginPage';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path="/auth/login" component={ LoginPage } />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </div>
    )
}
