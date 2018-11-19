import { Component } from '@angular/core';
import { FruitsService } from './fruits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FruitsService]
})
export class AppComponent {
  title = 'lab4part2';
  
  fruits: string[];
  
  constructor(private fruitsService: FruitsService){
    this.showFruits();
  };
  
  showFruits(){
    this.fruitsService.getFruits()
    .subscribe((data)=>{
      console.log(data);
      
      this.fruits = [];
      
      for(var key in data){
        let str = JSON.stringify(data[key].name);
        this.fruits.push(str);
      }
    });
  };
  
  addFruits(newName){
    this.fruitsService.postFruits(newName)
    .subscribe(data => console.log(data));
  };
}
