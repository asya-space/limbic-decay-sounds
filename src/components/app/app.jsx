import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import SoundsList from '../sounds-list/sounds-list';
import SoundsAddForm from '../sounds-add-form/sounds-add-form';

function App() {
// типа данные с сервера
    const data = [
        {name: 'Lili', listening: 15, increase: false, id: 1},
        {name: 'Metro-II017', listening: 20, increase: false, id: 2},
        {name: 'message 2.0', listening: 67, increase: true, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <SoundsList data={data}/>
            <SoundsAddForm/>
        </div>
    );
}

export default App;