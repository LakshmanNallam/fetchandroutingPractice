// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsData} = props
  console.log(blogsData)
  const finalOne = blogsData.map(eachItem => (
    <BlogItem eachItem={eachItem} key={eachItem.id} />
  ))
  return finalOne
}

export default BlogList
