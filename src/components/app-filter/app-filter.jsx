import './app-filter.css';

const AppFilter = (props) =>  {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light" 
                type="button"
                onClick={() => props.onUpdateFave('all')}>
                All sounds
            </button>
            <button 
                className="btn btn-outline-light" 
                type="button"
                onClick={() => props.onUpdateFave('fave')}>
                Favorites
            </button>
            <button 
                className="btn btn-outline-light" 
                type="button">
                Listened more 15
            </button>
        </div>
    )
}

export default AppFilter;