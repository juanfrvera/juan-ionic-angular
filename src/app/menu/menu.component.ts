import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  inputs: [
    'darkModeToggle: darkMode'
  ],
  outputs: [
    'darkModeChanged'
  ]
})
export class MenuComponent implements OnInit {

  // Outputs
  darkModeChanged : EventEmitter<boolean> = new EventEmitter<boolean>();

  // Inputs
  darkModeToggle: boolean;

  constructor() { }

  ngOnInit() {
  }

  darkModeToggled() {
    this.darkModeChanged.emit(this.darkModeToggle);
  }

}
