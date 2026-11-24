import { Component } from 'react';
import './sounds-list-item.css';
import {
    FaMusic,
    FaHeart,
    FaTrash,
    FaPlay, 
    FaStar
} from "react-icons/fa";

class SoundsListItem extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            increase: false,
            showIcon: false
        }
    }

    onIncrease = () => {
        this.setState(({increase, showIcon}) => ({
            increase: !increase,
            showIcon: !showIcon
        }))
    }

    render() {
        const {name, listening } = this.props;
        const {increase, showIcon} = this.state;
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase === true) {
            classNames += ' increase fa-star ';
        }

        return (
            <li className={classNames} >
                <span className="list-group-item-label"><i><FaMusic /></i>  {name}</span>
                <input type="text" 
                    className="list-group-item-input" 
                    defaultValue={listening + ' times'}/>
                <div className="d-flex justify-content-center aligh-items-center">
                    <button type="button" className="btn-play btn-sm">
                        <i><FaPlay /></i>
                    </button>
                    
                    <button type="button" className="btn-trash btn-sm">
                        <i><FaTrash/></i>
                    </button>
                    <button type="button" className="btn-heart btn-sm"
                    onClick={this.onIncrease} // увеличение прослушиваемости
                    >
                        <i onClick={this.showIcon}><FaHeart/></i> 
                    </button>
                    {showIcon 
                        && <button type="button" className="btn-star btn-sm">
                            <i><FaStar /></i>
                        </button>}
                </div>
            </li>
        )
    }
    
}

export default SoundsListItem;