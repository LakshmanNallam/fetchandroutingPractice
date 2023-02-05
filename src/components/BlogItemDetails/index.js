import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import UserInfo from '../UserInfo'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDeta: {}, notLoaded: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {hi} = params
    console.log(this.props)
    console.log(hi)
    const response = await fetch(`https://apis.ccbp.in/blogs/${hi}`)
    const data = await response.json()
    const modData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemDeta: modData, notLoaded: false})
  }

  render() {
    const {notLoaded, blogItemDeta} = this.state
    const {
      id,
      title,
      imageUrl,
      avatarUrl,
      author,
      content,
      topic,
    } = blogItemDeta

    const ele = notLoaded ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blogItemDetailss">
        <div className="irritation">
          <h1>{title}</h1>
          <div className="lowerConn">
            <div className="rowConn">
              <div className="imgConn">
                <img src={`${avatarUrl}`} className="imgaG" />
              </div>
              <p>{author}</p>
            </div>
          </div>
          <div className="ImGECon">
            <img src={`${imageUrl}`} className="imgPedh" alt={title} />
          </div>
          <p>{content}</p>
        </div>
      </div>
    )
    return ele
  }
}

export default BlogItemDetails
