import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkVisitPage } from './mark-visit.page';

describe('MarkVisitPage', () => {
  let component: MarkVisitPage;
  let fixture: ComponentFixture<MarkVisitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkVisitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkVisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
