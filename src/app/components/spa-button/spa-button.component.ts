import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spa-button',
  templateUrl: './spa-button.component.html',
  styleUrls: ['./spa-button.component.scss']
})
export class SpaButtonComponent {
  @Input() buttonText: string = '';

  constructor() {}

}


