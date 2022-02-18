import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output('menu') menu: EventEmitter<string> = new EventEmitter<string>();
  @Input('title') title: string = '';

  setMenu(m: string) {
    this.menu.emit(m);
  }
}
