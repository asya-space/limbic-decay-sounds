import './sounds-add-form.css';
import { Component } from 'react';

class SoundsAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            listened: ''
        }
        this.maxId = 4;
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddButton = (e) => {
        e.preventDefault();
        const newItem = {
            name: this.state.name,
            listened: this.state.listened,
            increase: false,
            id: this.maxId++
        };
        this.props.onAdd(newItem);
    }

    render () {
        const { name, listened } = this.state;
        const data = this.props.data;

        return <div className="app-add-form">
            <h3>Add new track</h3>
            <form 
                className="add-form d-flex"
                data={data} onSubmit={this.onAddButton}>
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="What is the name of track?" 
                    name="name"
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number" 
                    className="form-control new-post-label"
                    placeholder="How many listenings?" 
                    name="listened"
                    value={listened}
                    onChange={this.onValueChange} />
                <button className="btn btn-outline-light" 
                    type="submit">
                    Add
                </button>
            </form>
        </div>
    }
}

export default SoundsAddForm;