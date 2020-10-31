import React, { Component } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { connect } from 'react-redux';

class Profile extends Component {
    state = {
        User: {
            name: 'yasir',
            year: '4th',
            status: 'startup',
        },
    }
    render() {
        const { User, data } = this.state;

        // const data = useSelector((state) => {
        //     return state.data
        // })
        console.log(this.props.data)

        return (
            <div style={{ padding: 15 }}>
                <h2>
                    Profile
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

                <p>
                    Date: {this.props.data.length}
                </p>
            </div>
        )
    }
}


const mapStateToProps = state => 
({
    data: state.data,
});

export default connect(mapStateToProps)(Profile);