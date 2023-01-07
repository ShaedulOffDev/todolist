import './search.scss'

const Search = (props) => {
    const termUpdate = (val) => {
        props.termUpdate(val.toLowerCase())
    }
    return (
        <div className='search'>
            <input type="text" onChange={(e) => termUpdate(e.target.value)} name="search" placeholder='Search Article...'/>
        </div>
    )
}

export default Search
