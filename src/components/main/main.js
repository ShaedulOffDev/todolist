import './main.scss'
import Article from '../article/article'
import AddArticle from '../addArticle/addArticle'
import Search from '../search/search'

const Main = (props) => {
  return (
    <div className='main'>
      <div className="main-title">
        <h1>{props.filter}</h1>
        <AddArticle addArticle={props.addArticle}/>
      </div>
      <Search termUpdate={props.termUpdate}/>
      <ul className="main-list">
        {
        props.data.length ? 
        props.data.map(item => (
          <Article 
            done={e => props.done(item.id, e)}
            item={item} 
            key={item.id} 
            favouriteHandler={(e) => props.favouriteHandler(item.id, e.currentTarget.getAttribute('data-toggle'))}
            mark={item.mark}
            favourite={item.favourite}
            unread={item.unread}
            isDone={item.done}
            deleteArticle={() => props.deleteArticle(item.id)}
          />
        ))
        :
        <h1 className='empty'>Empty!</h1>
      }
      </ul>
    </div>
  )
}

export default Main