import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
 public var myArray = ["Course1", "Course2", "Course3"];
  constructor() {

  }
 
  getCourses(): string[]{
    return myArray;
  }
  
  saveCourse(courseName : string){

  }
}
