import './sounds-list-item.css';
import {
    FaMusic,
    FaHeart,
    FaRegHeart,
    FaTrash,
    FaSearch,
    FaPlay
} from "react-icons/fa";

const SoundsListItem = ({name, listening, increase}) => {
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase === true) {
        classNames += ' increase';
    }

    return (
        <li className={classNames} >
            <span className="list-group-item-label"><i><FaMusic /></i>  {name}</span>
            <input type="text" 
                   className="list-group-item-input" 
                   defaultValue={listening + ' times'}/>
            <div className="d-flex justify-content-center aligh-items-center">
                <button type="button" className="btn-cookie btn-sm">
                    <i><FaPlay /></i>
                </button>
                
                <button type="button" className="btn-trash btn-sm">
                    <i><FaTrash/></i>
                </button>
                <button type="button" className="heart btn-sm">
                    <i><FaHeart/></i>
                </button>
            </div>
        </li>
    )
}

export default SoundsListItem;