import {Component, Input, OnInit} from '@angular/core';

declare const require: any;
const marked = require('marked');

@Component({
  selector: 'app-component-wrapper',
  templateUrl: './component-wrapper.component.html',
  styleUrls: ['./component-wrapper.component.scss']
})
export class ComponentWrapperComponent implements OnInit {

  @Input() component: {name: string, markdown: string};
  readmeMarkup: string;
  constructor() { }

  ngOnInit() {
    this.readmeMarkup = marked(this.component.markdown);
  }

}
