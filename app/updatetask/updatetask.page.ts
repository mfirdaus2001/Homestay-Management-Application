import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.page.html',
  styleUrls: ['./updatetask.page.scss'],
})
export class UpdatetaskPage implements OnInit {
  @Input() task;
  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  taskName
  taskDate
  taskPriority
  taskCategory


  constructor(public modalCtrl:ModalController, public todoService: TodoService) { }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')

    this.taskName = this.task.value.taskName
    this.taskDate = this.task.value.taskDate
    this.taskPriority = this.task.value.taskPriority
    this.categorySelectedCategory = this.task.value.taskCategory
    //console.log(this.task);


  }
  selectedCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismiss(){
    await this.modalCtrl.dismiss()
  }

  async update(){
    this.newTaskObj = ({itemName:this.taskName,
      itemDueDate:this.taskDate,
      itemPriority:this.taskPriority,
      itemCategory:this.categorySelectedCategory
    })

    let uid = this.task.key
    await this.todoService.updateTask(uid, this.newTaskObj)
    this.dismiss()
  }

}
