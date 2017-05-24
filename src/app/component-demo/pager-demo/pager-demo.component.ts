import { Component, OnInit } from '@angular/core';
import {Page} from "../../components/pagination/page";
declare const require: any;

@Component({
  selector: 'app-pager-demo',
  templateUrl: './pager-demo.component.html',
  styleUrls: ['./pager-demo.component.scss']
})
export class PagerDemoComponent implements OnInit {

  page = new Page();
  pagerComponent = {markdown: require('../../components/pagination/pager/readme.md'), name: 'Pager'};

  constructor() { }

  onPageChange(pageEvent) {
    this.page.pageNumber = pageEvent.page;
  }

  ngOnInit() {
  }

}
