import {Component} from "@angular/core";

@Component({
  selector: "app",
  templateUrl: './app.html',
//  styleUrls: ['./app.scss']
})
export class AppComponent {

  constructor() {
  }
  
  ngOnInit() {
    console.log("App init");
  }
  
  ngOnDestroy() {
  }
}