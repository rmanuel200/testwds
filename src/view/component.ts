import { Component } from '@angular/core';

@Component({
  selector: 'main-view',
  templateUrl: './template.html',
//  styleUrls: ['./styles.scss']
})
export class MainView {

  constructor() {
  }
  
  ngOnInit() {
     console.log("view loaded");
  }
  
  ngOnDestroy() {
  }
}