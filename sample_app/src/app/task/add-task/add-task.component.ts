import { Component } from '@angular/core';
import $ from 'jquery'

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  closeAddTaskModal() {
    $("#addTaskModal input, textarea").val('');
    $("#addTaskModal").hide();
  }
}
