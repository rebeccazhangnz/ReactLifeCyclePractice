import React from 'react';
import Counter from './Counter/Counter';

class ReactLifeCycleCounter extends React.Component {
    //constructor takes props as its object
    constructor(props) {
        console.log('The constructor is called');
        //super allows us to call the parent class method, which sets this.props to props
        //ie. the props of the class itself will points to the props that passed into the that class
        super(props);
        //constructor is the only place that we can set state
        this.state = {
            mount: true,
            ignorePropValue: 0,
            randomPropValue: 1,
        };

        this.mountCounter = () => this.setState({ mount: true });
        this.unmountCounter = () => this.setState({ mount: false });
        this.ignorePropChange = () => this.setState({ ignorePropValue: Math.random() });
        this.randomValueGenerator = () =>
            this.setState({ randomPropValue: Number.parseInt(Math.random() * 100) });
    }

    render() {
        return (
            <>
                <button onClick={this.mountCounter} disabled={this.state.mount}>
                    Mount Counter
                </button>
                <button onClick={this.unmountCounter} disabled={!this.state.mount}>
                    UnMount Counter
                </button>
                <button onClick={this.ignorePropChange}>Ignore Prop Change</button>
                <button onClick={this.randomValueGenerator}>Generate a random value for the counter</button>
                {this.state.mount ? (
                    <Counter
                        ignorePropValue={this.state.ignorePropValue}
                        randomPropValue={this.state.randomPropValue}
                    />
                ) : null}
            </>
        );
    }
}

export default ReactLifeCycleCounter;
