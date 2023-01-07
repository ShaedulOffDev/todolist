import './article.scss'

const Article = (props) => {
    return (
        <li className="main-list__item">
            <div className={`main-list__item-title ${props.isDone ? 'through' : ''}`}>
                <div>
                    <label>
                        <input onChange={props.done} checked={props.isDone} type="checkbox"/>
                        <span className="checkmark"></span>
                    </label> 
                </div>
                <div>
                    <h3>{props.item.title}</h3>
                    <p>{props.item.text}</p>
                </div>
            </div>
            <div className="main-list__item-tools">
                <button 
                className={props.mark ? 'active' : 'a'} 
                onClick={props.favouriteHandler}
                data-toggle="mark">
                    <i className='fa fa-thumbtack'></i>
                </button>
                <button className={props.favourite ? 'active' : 'a'} onClick={props.favouriteHandler}
                data-toggle="favourite">
                    <i className='fa fa-star'></i>
                </button>
                <button className={props.unread ? 'active' : 'a'} onClick={props.favouriteHandler}
                data-toggle="unread">
                    <i className='fa fa-eye'></i>
                </button>
                <button onClick={props.deleteArticle}>
                    <i className='fa fa-trash'></i>
                </button>
            </div>
        </li>
    )
}

export default Article