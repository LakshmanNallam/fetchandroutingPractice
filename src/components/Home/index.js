import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

class Home extends Component {
  state = {blogsData: [], notLoaded: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const modData = data.map(eachItem => ({
      id: eachItem.id,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: modData, notLoaded: false})
  }

  render() {
    const {notLoaded, blogsData} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {notLoaded ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <BlogList blogsData={blogsData} />
        )}
      </div>
    )
  }
}

export default Home
