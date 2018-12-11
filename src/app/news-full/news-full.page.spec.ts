import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFullPage } from './news-full.page';

describe('NewsFullPage', () => {
  let component: NewsFullPage;
  let fixture: ComponentFixture<NewsFullPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFullPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
