import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
  @Input({required: true}) app_name!: string;
}
