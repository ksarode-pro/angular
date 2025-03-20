import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();
    
  get getUserPhoto()
  {
    return "assets/employee_photos/" + this.user.Id + ".jpg";
  }
  
  onSelectUser(user: User) {
    this.select.emit(user);
  }
}

export interface User {
  Id: number;
  Name: string;
  Photo: string;
}