import React from 'react';


class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {buttonColor: 'red'};               
        this.changeColor = this.changeColor.bind(this);   // binding this to set component
    }

    /*
    componentDidMount() {
        this.buttonID = setUp(
            () => this.set()
        );
    }
    */
    

    /*
    componentWillMount() {

    }
    */

    
    changeColor(){
        this.setState(state => ({
           buttonColor: 'blue'
        }));
    }
    
    
    render(){
        return <button style={this.state} onClick={this.changeColor}>Color Button</button>
    }
}

export default Notes;

