// import dependencies
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// import actions 
import { login } from './../../redux/authentication/auth.actions';

import './signin.styles.scss';


const SigninPage = ({ history }) => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth)


    return <div>
        SIGN IN
    </div>
};

export default SigninPage;
