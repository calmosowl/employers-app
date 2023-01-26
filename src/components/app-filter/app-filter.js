import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'На повышение'},
    {name: 'moreThan1000', label: 'З/П больше 1000$'},
  ]

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const buttonClass = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button className={`btn ${buttonClass}`}
              type="button"
              onClick={() => props.onFilterSelect(name)}
              key={name}>
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