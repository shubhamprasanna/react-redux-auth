import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { alertActions } from '../_actions';

function HomePage() {
    const user = useSelector(state => state.authentication.user.user);
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
      alert.message && setTimeout(() => {
        dispatch(alertActions.clear());
      }, 2000);
    }, []);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user && user.name}!</h1>
            <p>You're logged in!</p>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { HomePage };