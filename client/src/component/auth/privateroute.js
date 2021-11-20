import React from 'react';
import { Redirect, Route} from 'react-router';
import { getSession } from '../helper';

const checkAuth = () => {
    return getSession() ? false : true;
}

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
        }
    }
    componentWillMount() {
        this.setState({
            auth: checkAuth() && !this.state.auth
        })
    }
    render() { 
        const { component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render = {(props) => (
                    this.state.auth ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname:'/login',
                                state: {from: this.props.location}
                            }}
                        />
                    )
                )}
            />
        );
    }
}

export default PrivateRoute;