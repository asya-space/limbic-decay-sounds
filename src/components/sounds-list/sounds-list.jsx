import SoundsListItem from '../sounds-list-item/sounds-list-item';
import './sounds-list.css';

const SoundsList = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <SoundsListItem key={id} {...itemProps}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default SoundsList;