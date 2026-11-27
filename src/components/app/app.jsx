import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import SoundsList from '../sounds-list/sounds-list';
import SoundsAddForm from '../sounds-add-form/sounds-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Lili', listened: 15, increase: false, rise: true, id: 1 },
                { name: 'Metro-II017', listened: 20, increase: false, rise: false, id: 2 },
                { name: 'message 2.0', listened: 67, increase: true, rise: false, id: 3 }
            ]
        }
    }
   
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (newItem) => {
        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const { data } = this.state;

        const tracks = this.state.data.length
	    const increased = this.state.data
                        .filter(item => item.increase === true).length;
        return (
            <div className="app">
                <AppInfo tracks={tracks}
                         increased={increased} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <SoundsList data={data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp} />

                <SoundsAddForm 
                data={this.state.data} 
                onAdd={this.addItem} /> 
            </div>
        );
    }
}

export default App;