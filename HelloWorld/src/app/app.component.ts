import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWOrld';
  imgUrl = "/assets/BL_logo.jpg";
  url = "https://www.bridgelabz.com";
  userName:String = "";
 
  ngOnInit(): void {
    this.title = "Hello from Bridgelabz..";
  }
  onClick(event:MouseEvent){
    console.log("Save button is clicked !", event);
    window.open(this.url, "_blank");
  }
}
