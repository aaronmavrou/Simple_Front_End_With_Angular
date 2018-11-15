import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
 public myArray: string[] = ["Course1", "Course2", "Course3"];
  constructor() {

  };
 
  getCourses(): string[]{
    return this.myArray;
  };
  
  saveCourse(courseName){
    return this.myArray = this.myArray.concat(courseName);
  };
}
