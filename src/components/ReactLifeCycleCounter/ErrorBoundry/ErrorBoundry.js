import React from 'react';

class ErrorBoundry extends React.Component {

    componentDidMount() {
        this.setState({ hasError: false });
    }
    //componentDidCatch method handles any errors that we run into
    componentDidCatch(error, info) {
        console.log('Component Did Catch');
        return this.props.onCatchError(true);
    }

    render() {
        if (this.props.hasError) {
            return <h1>We have encountered an Error! </h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundry;
