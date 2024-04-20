import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListPage } from './task-list.page';
import { IonicModule } from '@ionic/angular';

describe('TaskListPage', () => {
  let component: TaskListPage;
  let fixture: ComponentFixture<TaskListPage>;

 // beforeEach(async(() => {
   // fixture = TestBed.createComponent(TaskListPage);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  //}));

  beforeEach(async(() => {


    TestBed.configureTestingModule({
      declarations: [ TaskListPage ],
      imports: [IonicModule.forRoot()]
    });

    fixture = TestBed.createComponent(TaskListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
