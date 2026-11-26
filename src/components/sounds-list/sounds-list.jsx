import SoundsListItem from '../sounds-list-item/sounds-list-item';
import './sounds-list.css';

const SoundsList = ({data, onDelete}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <SoundsListItem key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default SoundsList;