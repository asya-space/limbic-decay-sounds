import './sounds-add-form.css';

const SoundsAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add new track</h3>
            <form 
                className="add-form d-flex">
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="How many publishing or listenings?" />
                <button className="btn btn-outline-light">
                    Add
                </button>
            </form>
        </div>
    )
}

export default SoundsAddForm;