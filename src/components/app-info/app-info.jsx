import './app-info.css';

const AppInfo = ({ increased, tracks }) => {
    return (
        <div className="app-info">
            <h1>Limbic Decay Music Library</h1>
            <h2>Quantity of compositions: {tracks}</h2>
            <h2>Favorites: {increased} </h2>
        </div>
    )
}

export default AppInfo;