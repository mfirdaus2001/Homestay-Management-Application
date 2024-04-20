import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatereservePage } from './updatereserve.page';

describe('UpdatereservePage', () => {
  let component: UpdatereservePage;
  let fixture: ComponentFixture<UpdatereservePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatereservePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
