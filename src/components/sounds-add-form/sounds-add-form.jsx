import './sounds-add-form.css';
import { Component } from 'react';

class SoundsAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            listeinig: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () {
        const { name, listening } = this.state;

        return <div className="app-add-form">
            <h3>Add new track</h3>
            <form 
                className="add-form d-flex">
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="What is the name of track?" 
                    name="name"
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number" 
                    className="form-control new-post-label"
                    placeholder="How many listenings?" 
                    name="listening"
                    value={listening}
                    onChange={this.onValueChange} />
                <button className="btn btn-outline-light">
                    Add
                </button>
            </form>
        </div>
    }
}

export default SoundsAddForm;