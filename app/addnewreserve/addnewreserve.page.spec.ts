import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewreservePage } from './addnewreserve.page';

describe('AddnewreservePage', () => {
  let component: AddnewreservePage;
  let fixture: ComponentFixture<AddnewreservePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddnewreservePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
