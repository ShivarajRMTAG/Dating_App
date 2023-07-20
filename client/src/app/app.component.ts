import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  // userVar: string = "strnig"; //normal type to define a variable
  users: any;


  constructor (private http : HttpClient) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: responce => this.users = responce,
      error: error => console.log("Error is : ",error),
      complete: () => console.log("Request has completed : ",this.users)
    })
  }

}
