import {ApiService} from './ApiService'

const endpoint = 'category';

export const CategoryService = {
  list(){
    return ApiService.get(endpoint)
  }
  ,
  create(newCourse){
    return ApiService.post(endpoint, newCourse)
  }
  ,
  remove(courseId){
    return ApiService.delete(endpoint, courseId)
  }
}