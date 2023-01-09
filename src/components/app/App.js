import {useState} from 'react'
import './App.scss';
import Ctg from '../ctg/ctg';
import Main from '../main/main';

const App = () => {
  const [data, setData] = useState([
    {
      title: 'Todo list with React js.', 
      text: 'This app my first react app :)', 
      mark: false,
      favourite: false,
      unread: false,
      id: 1,
      done: false,
    },
  ])
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [showCtg, setShowCtg] = useState(false)

  const showCtgHandler = () => {
    setShowCtg(prevState => !prevState)
  }
  const done = (id, e) => {
    setData(prevState => {
      return prevState.map(item => {
        if(item.id === id){
          return {...item, done: e.target.checked}
        }
        return item
      })
    })
  }
  const addArticle = item => {
    const newArticle = {title: item.title, text: item.text, mark: false, favourite: false, unread: false, id: data.length + 1, done: false}
    setData(prevState => {
      return [...prevState, newArticle]
    })
  }
  const deleteArticle = id => {
    setData(prevState => {
      return prevState.filter(c => c.id !== id)
    })
  }
  const filterHandler = (arr, filter) => {
    switch(filter){
      case 'mark':
          return arr.filter(c => c.mark)
      case 'favourite':
          return arr.filter(c => c.favourite)
      case 'unread':
          return arr.filter(c => !c.unread)
      default:
          return arr
    }
  }
  const favouriteHandler = (id, prop) => {
    setData(prevState => {
      return prevState.map(item => {
          if(item.id === id){
              return {...item, [prop]: !item[prop]}
          }
          return item
      })
    })
  }

  const filterUpdate = filter => setFilter(filter)
  const termUpdate = term => setTerm(term)

  const searchHandler = (arr, key) => {
    if(key.length === 0){
      return arr
    }
    return arr.filter(item => item.title.toLowerCase().indexOf(key) > -1)
  }
 
  const visibleData = filterHandler(searchHandler(data, term), filter)

  return (
    <div style={{display: 'flex'}}>
      <Ctg isShow={showCtg} showCtg={showCtgHandler} data={data} filter={filter} filterUpdate={filterUpdate}/>
      <Main 
      data={visibleData} 
      termUpdate={termUpdate}
      favouriteHandler={favouriteHandler} 
      filter={filter} 
      addArticle={addArticle}
      deleteArticle={deleteArticle}
      done={done}
      isShow={showCtg}
      />
    </div>
  )
}

export default App;
