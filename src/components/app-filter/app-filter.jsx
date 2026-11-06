import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light" 
                type="button">
                All sounds
            </button>
            <button 
                className="btn btn-outline-light" 
                type="button">
                Favorites
            </button>
            <button 
                className="btn btn-outline-light" 
                type="button">
                Quantity of listens
            </button>
        </div>
    )
}

export default AppFilter;