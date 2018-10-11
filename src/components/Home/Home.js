import React, { Component } from 'react';
import home from './Home.module.css';

class Home extends Component {
    render() {
        return (
            <div className={home.wrapper}>
                <div className={home.container}>
                    <nav className={home.nav}>
                        <ul className={`${home.navList} t-nav-list`}>

                        </ul>
                    </nav>
                </div>        
            </div>
        )
    }
}