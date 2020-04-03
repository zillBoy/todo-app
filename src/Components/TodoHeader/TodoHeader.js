import React, {Component} from 'react';
import './TodoHeader.css';

class TodoHeader extends Component {
    state = {
        today: ""
    }

    componentDidMount = () => {
        let date = Date();
        this.setState({today: date.slice(0, 15)})
    }
 
    render() {
        return(
            <div id="todoHeaderDiv">
                <h1 id="todoHeader">To-do List</h1>
                <h1 id="todoHeaderDate">{this.state.today}</h1>
            </div>
        );
    }
}

export default TodoHeader;