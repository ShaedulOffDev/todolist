import {Component} from 'react'
import './App.scss';
import Ctg from '../ctg/ctg';
import Main from '../main/main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'Todo list with React js.', 
          text: 'This app my first react app :)', 
          mark: false,
          favourite: false,
          unread: false,
          id: 1,
          done: false,
        },
      ],
      term: '',
      filter: 'all',
      showCtg: false,
    }
  }
  showCtg = () => {
    this.setState(({showCtg}) => ({
      showCtg: !showCtg
    }))
  }
  done = (id, e) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id){
          return {...item, done: e.target.checked}
        }
        return item
      })
    }))
  }
  addArticle = item => {
    const newArticle = {title: item.title, text: item.text, mark: false, favourite: false, unread: false, id: this.state.data.length + 1, done: false}
    this.setState(({data}) => ({
      data: [...data, newArticle]
    }))
  }
  deleteArticle = id => {
    this.setState(({data}) => ({
      data: data.filter(c => c.id !== id)
    }))
  }
  filterHandler = (arr, filter) => {
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
  favouriteHandler = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
          if(item.id === id){
              return {...item, [prop]: !item[prop]}
          }
          return item
      })
    }))
  }

  filterUpdate = filter => this.setState({filter})
  termUpdate = term => this.setState({term})

  searchHandler = (arr, key) => {
    if(key.length === 0){
      return arr
    }
    return arr.filter(item => item.title.toLowerCase().indexOf(key) > -1)
  }
 
  render(){
    const {data, filter, term, showCtg} = this.state
    const visibleData = this.filterHandler(this.searchHandler(data, term), filter)
    return (
      <div style={{display: 'flex'}}>
        <Ctg isShow={showCtg} showCtg={this.showCtg} data={data} filter={filter} filterUpdate={this.filterUpdate}/>
        <Main 
        data={visibleData} 
        termUpdate={this.termUpdate}
        favouriteHandler={this.favouriteHandler} 
        filter={filter} 
        addArticle={this.addArticle}
        deleteArticle={this.deleteArticle}
        done={this.done}
        isShow={showCtg}
        />
      </div>
    )
  }
}

export default App;
