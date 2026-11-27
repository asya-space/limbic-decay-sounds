import './sounds-list-item.css';
import {
    FaMusic,
    FaHeart,
    FaTrash,
    FaPlay, 
    FaStar
} from "react-icons/fa";

const SoundsListItem = (props) => {
        const {name, listened, onDelete, onToggleProp, increase } = props;
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase === true) {
            classNames += ' increase like ';
        }

        return (
            <li className={classNames} >
                <span className="list-group-item-label"><i><FaMusic /></i>  {name}</span>
                <input type="text" 
                    className="list-group-item-input" 
                    defaultValue={listened + ' times'}/>
                <div className="d-flex justify-content-center aligh-items-center">
                    <button 
                    type="button" 
                    className="btn-play btn-sm">
                        <i><FaPlay /></i>
                    </button>
                    
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i><FaTrash/></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-heart btn-sm" 
                        data-toggle="increase" onClick={onToggleProp}>
                        <i><FaHeart/></i> 
                    </button>
                    <i className="fa-star"><FaStar/></i>
                </div>
            </li>
        )
    }

export default SoundsListItem;