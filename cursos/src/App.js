import React, { Component } from 'react';
import './App.css';
import Course from './components/Courses';
import NewCourseForm from './components/NewCourseForm';
import { CourseService } from './services/CourseService';
import { CategoryService } from './services/CategoryService';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      courses: [],
      categories: []
    }
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
    this.startData = this.startData.bind(this);

    this.startData()
  }

  async startData(){
    //const courses = await CourseService.list()
    //const categories = await CategoryService.list()

    const [courses, categories] = await Promise.all([
      CourseService.list(),
      CategoryService.list()
    ])
    
    this.setState({
      courses,
      categories
    })
  }

  async remove(courseId){
    const { courses } = this.state,
      courseIndex = courses.findIndex(course => course.id == courseId);
      await CourseService.remove(courseId);
      courses.splice(courseIndex, 1);
      this.setState({courses})
  }

  async add(course){
    const { courses } = this.state,
      newCourse = await CourseService.create(course);
    courses.push(newCourse);
    this.setState({courses})
  }

  render(){
    const {state} = this;
    return(
      <div className="App">
        <NewCourseForm onSubmit={this.add} categories={state.categories} />
        <ul className="courses-list">
          {
            state.courses.map(course => <Course course={course} onRemove={this.remove} />)
          }
        </ul>
      </div>
    )
  }
}

export default App;
