'use client'
import React from 'react';
import styles from './Logout.module.scss';

function LogoutButton() {
    return <button className={ styles.logout } onClick={() => alert('Logged Out!')}>Logout</button>;
}

export default LogoutButton;
