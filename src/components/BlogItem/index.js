import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {id} = eachItem
  return (
    <Link to={`/blogs/${id}`} className="BlogItem">
      <div className="imgCon">
        <img src={`${eachItem.imageUrl}`} className="img" alt={eachItem.id} />
      </div>
      <div className="rightCon">
        <p>{eachItem.topic}</p>
        <h1 className="h1Ttitle">{eachItem.title}</h1>
        <div className="rowCon">
          <div className="avatarrCon">
            <img src={`${eachItem.avatarUrl}`} className="avatar" />
          </div>
          <p>{eachItem.author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
