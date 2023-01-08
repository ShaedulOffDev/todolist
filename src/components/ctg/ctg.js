import './ctg.scss'

const Ctg = (props) => {
  const count = (prop) => {
    const a = props.data.filter(item => {
      if(prop === 'unread'){
        if(!item[prop]){
          return item
        }
      }else{
        if(item[prop]){
          return item
        }
      }
      return ''
    })
    return a.length
  }
  return (
    <div className={`ctg ${props.isShow ? 'show-ctg' : ''}`}>
        <button onClick={props.showCtg} className="toggle-btn">
          <i className={`fa ${props.isShow ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
        </button>
        <h2>Todo List</h2>
        <ul className='ctg-list'>
          {
            tabs.map(item => (
              <li className={`ctg-list__item ${props.filter === item.name ? 'active' : ''}`} key={item.name} onClick={() => props.filterUpdate(item.name)}>
                <i className={`fa ${item.class}`}></i>
                &nbsp;
                {item.name}
                &nbsp;
                ({item.name === 'all' ? props.data.length : count(item.name)})
              </li>
            ))
          }
        </ul>
    </div>
  )
}

const tabs = [
  {name: 'all', class: 'fa-border-all'},
  {name: 'mark', class: 'fa-thumbtack'},
  {name: 'favourite', class: 'fa-star'},
  {name: 'unread', class: 'fa-eye-slash'},
]

export default Ctg