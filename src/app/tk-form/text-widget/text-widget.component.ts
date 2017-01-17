import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-text-widget',
  template: `
    <p>
      text-widget Works!
    </p>
  `,
  styleUrls: ['./text-widget.component.css']
})
export class TextWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
