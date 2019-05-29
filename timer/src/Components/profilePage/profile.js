import React from 'react';
import ProfileDisplay from './ProfileDisplay';

export default class Profile extends React.Component {


    render () {
        return (
        
        <div>
            <header>Profile Page!</header>
            <h1>Completed Tasks</h1>
            <ProfileDisplay/>
        </div>
           
        );
    }

}