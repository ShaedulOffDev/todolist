import './ctg.scss'

const Ctg = ({filter, filterUpdate}) => {
  return (
    <div className='ctg'>
        <h2>Todo List</h2>
        <ul className='ctg-list'>
          {
            tabs.map(item => (
              <li className={`ctg-list__item ${filter === item.name ? 'active' : ''}`} key={item.name} onClick={() => filterUpdate(item.name)}>
                {item.name}
                &nbsp;
                <i className={`fa ${item.class}`}></i>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

const tabs = [
  {name: 'all', class: '', id: 1},
  {name: 'mark', class: 'fa-thumbtack'},
  {name: 'favourite', class: 'fa-star'},
  {name: 'unread', class: 'fa-eye-slash'},
]

export default Ctg