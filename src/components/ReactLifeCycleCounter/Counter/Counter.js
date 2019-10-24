import React from 'react';

class Counter extends React.Component {
    //constructor takes props as its object
    constructor(props) {
        console.log('The constructor is called');
        //super allows us to call the parent class method, which sets this.props to props
        //ie. the props of the class itself will points to the props that passed into the that class
        super(props);
        //constructor is the only place that we can set state
        this.state = {
            initialCount: 0,
            count: 0,
            randomPropValue: 0,
        };

        this.increment = () => this.setState({ count: this.state.count + 1 });
        this.decrement = () => this.setState({ count: this.state.count - 1 });
        this.reset = () => this.setState({ count: this.state.initialCount });
    }

    // getDrivedStateFromProps is a static mathod, the purpose of this method is to copy any values that people are interested in transferring over to state
    //because this is a static method, we don't have to access the instance of the object (ie. props and state is pointed to the object itself, we don't need to use this.props or this .state)
    static getDerivedStateFromProps(props, state) {
        //example: if there is a randomProp value passed in and the current state value is not equal to the prop value, then set the props to state
        if (props.randomPropValue && state.randomPropValue !== props.randomPropValue) {
            return {
                randomPropValue: props.randomPropValue,
                count: props.randomPropValue,
            };
        }
        return null;
    }

    //componentDidMount will be called after render function, it calls after the component is mounted on the DOM
    //This is an single render call, once the component is mounted , any state changes will not trigger componentDidMount
    //componentDidMount is only triggered when the component is constructed
    componentDidMount() {
        console.log('Component did mount!');
    }

    //componentDidUpdate will not be called when the component is first render/mounted.
    //Any state change on the mounted component will trigger componentDidUpdate
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did Update!');
    }

    //componentWillMount will only be trigged when the component being taken out from the dom
    componentWillUnmount() {
        console.log('Component will unmount');
    }

    //Generally shouldComponentUpdate returns true by default, the purpose of this method is to let react know if render should be trigger or not
    //However if sometimes people don't rerender to be triggered when the props gets update because you dont want to change anything in the ui, expecailly when the render is expensive to compute. Then people can use this method to gain some performance
    shouldComponentUpdate(nextProps, nextState) {
        if (
            //example: if there is an ignorePropValue prop passed to this component and that value is different from the nextProp (in this case, ignorePropValue is a random number,so most likely the current prop and the next prop are not equal. Therefore, this will return false, the conter will not be rerender. ie. eventho the props value(ignorePropValue) has changed, this prop change will not trigger rerendered )
            nextProps.ignorePropValue &&
            this.props.ignorePropValue !== nextProps.ignorePropValue
        ) {
            console.log('Should Component Update? False, Do not rerender');
            return false;
        }
        console.log('Should Component Update? true, rerender');
        return true;
    }

    render() {
        console.log('The render function is called');
        return (
            <>
                <div className="counter">Counter : {this.state.count}</div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </>
        );
    }
}

export default Counter;
