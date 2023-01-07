import { Component } from 'react'
import './addArticle.scss'

class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: '',
            text: '',
        }
    }
    addArticle = (e) => {
        e.preventDefault()
        if(this.state.title !== ''){
            this.props.addArticle({title: this.state.title, text: this.state.text})
            this.setState(({
                modal: false,
                title: '',
                text: '',
            }))
        }else{
            alert('Area empty. Please enter a text!')
        }
    }
    modalShow = () => {
        this.setState(({modal: true}))
    }
    modalHide = (e) => {
        e.preventDefault()
        this.setState(({modal: false}))
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const {modal} = this.state
        return (
            <>
                <button onClick={this.modalShow} className='btn'><i className='fa fa-plus'></i> Add Article</button>
                <div className={`modal ${modal ? 'show' : ''}`}>
                    <form onSubmit={e => this.addArticle(e)}>
                        <h4>Add new article</h4>
                        <input value={this.state.title} onChange={e => this.inputHandler(e)} type="text" name="title" />
                        <textarea value={this.state.text} onChange={e => this.inputHandler(e)} name="text" cols="30" rows="10"></textarea>
                        <div>
                            <button type='submit' onClick={e => this.addArticle(e)}><i className='fa fa-plus'></i> Add</button>
                            <button onClick={(e) => this.modalHide(e)}><i className='fa fa-times'></i> Close</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default AddArticle
