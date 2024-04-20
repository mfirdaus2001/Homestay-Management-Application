import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdatetaskPage } from '../updatetask/updatetask.page';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {


  todoList = []

  today : number = Date.now()

  constructor(public modalCtrl:ModalController, public todoService: TodoService) {
    this.getAllTask()
  }

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    })

    modal.onDidDismiss().then(newTask =>{

      this.getAllTask()
    //  console.log(newTask.data);
    //  this.todoList.push(newTask.data)
    })

    return await modal.present()
  }

  getAllTask(){

    this.todoList = this.todoService.getAllTask()
    console.log(this.todoService.getAllTask());


  }

  delete(key){
    //console.log(key);
    this.todoService.deleteTask(key)
    this.getAllTask()
    //this.todoList.splice(index,1)
  }

  async update(selectedTask){
    const modal = await this.modalCtrl.create({
      component: UpdatetaskPage,
      componentProps: {task: selectedTask}
    })

    
    modal.onDidDismiss().then(() =>{

      this.getAllTask()
    })

    return await modal.present()
  }

  ngOnInit() {
  }

}
