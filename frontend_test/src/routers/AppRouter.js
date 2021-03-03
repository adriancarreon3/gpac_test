import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { AuthRouter } from './AuthRouter';
import { TalentRouter } from './TalentRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { loadRecruits } from '../helpers/loadRecruits'
import { setRecruits, setLocations } from '../actions/recruit';
import { Footer } from '../components/principal/Footer';
import { loadLocations } from '../helpers/loadLocations';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const { id_user, id_role } = useSelector(store => store.auth);
  const isLoggedIn = useSelector(store => store.auth.id_user) ? true : false;
  
  useEffect(async() => {
      if(isLoggedIn=== true){
        const recruits = await loadRecruits(id_user, id_role);
        dispatch( setRecruits(recruits) );
        
        const locations = await loadLocations();
        dispatch( setLocations(locations) );
      }
  }, [isLoggedIn, id_user])


    return (
            <Router>
                <div style={{backgroundColor: '#24292E'}}>
                  <Switch>
                      <PublicRoute path="/auth" isAuth={isLoggedIn} component={ AuthRouter } />
                  
                      <PrivateRoute path="/" isAuth={isLoggedIn} component={ TalentRouter } />

                      <Redirect to='/auth/login' />
                      
                  </Switch>
                </div>

                <Footer />
            </Router>
    )
}
