import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: "Все сотрудники", colored: true},
        {name: 'rise', label: "На повышение", colored: true},
        {name: 'moreThen1000', label: "З/П больше 1000$", colored: true}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = colored ? {color: '#E5E4E2'} : null;
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}
                    style={style}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;