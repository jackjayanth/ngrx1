import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-material-home',
  templateUrl: './material-home.component.html',
  styleUrls: ['./material-home.component.css'],
})
export class MaterialHomeComponent implements OnInit{
  constructor() {}
  show: string = '';

  showComponent(i:string){
    // event.preventDefault();
    this.show = i;
    console.log(this.show);
    
  }

  ngOnInit(): void {
    this.show = 'home';
  }
}
