import React, { Component } from 'react'

export default class Profile extends Component {
    state = {
        User: {
            name: 'yasir',
            year: '4th',
            status: 'startup'
        }
    }
    render() {
        const { User } = this.state;
        return (
            <div style={{ padding: 15 }}>
                <h2>
                    Settings
                </h2>
                <p>
                    Name: {User.name.toUpperCase()}
                </p>
                <p>
                    Year: {User.year.toUpperCase()}
                </p>
                <p>
                    Status: {User.status.toUpperCase()}
                </p>
            </div>
        )
    }
}
