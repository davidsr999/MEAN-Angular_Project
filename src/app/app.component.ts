import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  ngOnInit(){
    console.log('RECUERDA encencer el servidor backend con "nodemon app.js"!!!!!!!!!!!!!!!!!!!!!!!!')
  }
}
