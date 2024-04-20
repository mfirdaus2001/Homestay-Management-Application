import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddnewreservePage } from '../addnewreserve/addnewreserve.page';
import { Todo1Service } from '../todo1.service';
import { UpdatetaskPage } from '../updatetask/updatetask.page';
import { UpdatereservePage } from '../updatereserve/updatereserve.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //need fixing
  todoReserve = []
  today : number = Date.now()
  //need fixing

  constructor(public modalCtrl1:ModalController, public todo1Service: Todo1Service) {
    this.getAllReserve()
  }

  async addReserve(){
    const modal1 = await this.modalCtrl1.create({
      component: AddnewreservePage,
    })

    modal1.onDidDismiss().then(newReserve =>{

      this.getAllReserve()
    //  console.log(newTask.data);
    //  this.todoList.push(newTask.data)
    })

    return await modal1.present()
  }

  getAllReserve(){

    this.todoReserve = this.todo1Service.getAllReserve()
    console.log(this.todo1Service.getAllReserve());


  }

  deleteReserve(key){
    //console.log(key);
    this.todo1Service.deleteReserve(key)
    this.getAllReserve()
    //this.todoList.splice(index,1)
  }

  async updateReserve(selectedTask){
    const modal = await this.modalCtrl1.create({
      component: UpdatereservePage,
      componentProps: {reserve: selectedTask}
    })

    
    modal.onDidDismiss().then(() =>{

      this.getAllReserve()
    })

    return await modal.present()
  }

}
