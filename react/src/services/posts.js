import request from '../utils/request'
import BaseService from './baseService'
import { stringify } from 'qs'

class PostService extends BaseService {

  getPosts(pageInfo, keyword, userId) {
    return super.get(`/api/posts?${stringify({...pageInfo, keyword, userId:user_id})}`)
  }

  getPostContent(postId) {
    return super.get(`/api/posts/${postId}/content`)
  }

  createPost(title, content) {
    return super.post('/api/posts', {
      title, content
    })
  }

  patchPost(title, content, postId) {
    return super.patch(`/api/posts/${postId}`, {
      title, content
    })
  }

  setVisibilityOfPost(visible, postId) {
    return super.patch(`/api/posts/${postId}`, {
      visible
    })
  }

  deletePost(postId) {
    super.delete(`/api/posts/${postId}`)
  }

  getPostInfo(postId) {
    return super.get(`/api/posts/${postId}`)
  }
}

export default new PostService()