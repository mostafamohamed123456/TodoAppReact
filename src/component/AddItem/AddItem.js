import React, {Component, Fragment} from "react";


class AddItem extends Component{
    state={
        name:'',
        age:''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleForm = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name:'',
            age:''
        })
    }
    render(){
        return(
            <Fragment>
                <form onSubmit={this.handleForm}>
                    <input type="text" id="name" onChange={this.handleInput} placeholder="Enter Name...." value={this.state.name}/>
                    <input type="number" id="age" onChange={this.handleInput} placeholder="Enter Age...." value={this.state.age}/>
                    <input type="submit" value="AddTodo"/>
                </form>
            </Fragment>
        );
    }
}
export default AddItem;