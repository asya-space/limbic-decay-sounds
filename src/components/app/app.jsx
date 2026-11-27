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
            ],
            term: '',
            faveFilter: 'all'
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

    searchSound = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(track => {
            return track.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => { 
        this.setState({term: term});
    }

    onSearchByFave = (items, faveFilter) => {
        if (faveFilter === 'fave') {
            return items.filter(track => track.increase === true);
        }
        return items;
    }
    
    onUpdateFave = (faveFilter) => {
        this.setState({faveFilter});
    }

    render() {
        const { data, term, faveFilter } = this.state;

        const tracks = this.state.data.length
	    const increased = this.state.data
                        .filter(item => item.increase === true).length;
        
        const visibleData = this.onSearchByFave(this.searchSound(data, term), faveFilter);

        return (
            <div className="app">
                <AppInfo tracks={tracks}
                         increased={increased} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                    onUpdateFave={this.onUpdateFave} />
                </div>
                <SoundsList data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp} />

                <SoundsAddForm 
                data={data} 
                onAdd={this.addItem} /> 
            </div>
        );
    }
}

export default App;