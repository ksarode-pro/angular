import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Task } from '../../common/custom_types';
import $ from 'jquery'
import { ShadowComponent } from "../../shadow/shadow.component";

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, ShadowComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
taskName: any;
taskDescription: any;
taskEndDate: any;
@Output() addTaskEvent = new EventEmitter<Task>();

  closeAddTaskModal() {
    $("#addTaskModal input, textarea").val('');
    $("#addTaskModal").hide();
  }

  addTaskFormSubmit() {
    let taskData: Task = {
      Name: this.taskName,
      Description: this.taskDescription,
      EndDate: this.taskEndDate,
      Status: 'Pending',
      Id: Math.floor(Math.random() * 1000),
      UserId: null!
    };
    this.addTaskEvent.emit(taskData);
    this.closeAddTaskModal();
  }
}
