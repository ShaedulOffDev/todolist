import { useState } from 'react'
import './addArticle.scss'

const AddArticle = (props) => {
    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const addArticle = (e) => {
        e.preventDefault()
        if(title !== '' && text !== ''){
            props.addArticle({title: title, text: text})
            setModal(false)
            setText('')
            setTitle('')
        }else{
            alert('Area empty. Please enter a text!')
        }
    }
    const modalShow = () => {
        setModal(true)
    }
    const modalHide = (e) => {
        e.preventDefault()
        setModal(false)
    }
    const inputHandler = (e) => {
        e.target.name === 'title'? setTitle(e.target.value) : setText(e.target.value)
    }

    return (
        <>
            <button onClick={modalShow} className='btn'><i className='fa fa-plus'></i> Add Article</button>
            <div className={`modal ${modal ? 'show' : ''}`}>
                <form onSubmit={e => addArticle(e)}>
                    <h4>Add new article</h4>
                    <input value={title} onChange={e => inputHandler(e)} type="text" name="title" />
                    <textarea value={text} onChange={e => inputHandler(e)} name="text" cols="30" rows="10"></textarea>
                    <div>
                        <button type='submit' onClick={e => addArticle(e)}><i className='fa fa-plus'></i> Add</button>
                        <button onClick={(e) => modalHide(e)}><i className='fa fa-times'></i> Close</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddArticle
