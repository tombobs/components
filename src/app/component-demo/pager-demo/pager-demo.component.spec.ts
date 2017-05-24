import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerdemoComponent } from './pager-demo.component';

describe('PagerdemoComponent', () => {
  let component: PagerdemoComponent;
  let fixture: ComponentFixture<PagerdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
