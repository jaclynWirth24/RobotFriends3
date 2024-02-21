import React, {Component} from "react";

class ErrorBoundary extends Component {
    /**
     * Constructs a new ErrorBoundary component.
     */
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    };
    
    /**
     * Catches errors thrown by child components and updates the state accordingly.
     * @param {Error} error - The error object thrown by the child component.
     * @param {Object} info - Additional information about the error.
     * @returns {void}
     */
    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }
    
    /**
     * Renders the ErrorBoundary component.
     * @returns {JSX.Element} - The rendered component.
     */
    render() {
        if(this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children;
    }

    

    
}

export default ErrorBoundary;