import SoundsListItem from '../sounds-list-item/sounds-list-item';
import './sounds-list.css';
const SoundsList = ({data}) => {
    // автоматически собираю данные, перебор эл-тов массива в объекте data
    const elements = data.map(item => {
        return (
            <SoundsListItem {...item}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default SoundsList;