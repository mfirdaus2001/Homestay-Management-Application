import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  //categories = ['work', 'personal', 'home']
  categories =[]
  categorySelectedCategory

  newTask = {}
  taskName
  taskDate
  taskPriority
  taskCategory

  //taskObject

  constructor(public modalCtrl:ModalController, public todoService: TodoService) { }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')
  }x

  async dismiss(){
    
    await this.modalCtrl.dismiss(this.newTask)
  }

  selectedCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async AddTask(){
    
    this.newTask = ({itemName:this.taskName,
                        itemDueDate:this.taskDate,
                        itemPriority:this.taskPriority,
                        itemCategory:this.taskCategory
                      })
    console.log(this.newTask);
    let uid = this.taskName + this.taskDate

    if(uid){
    await this.todoService.addTask(uid, this.newTask)
    }else{
      console.log("can't save empty task");
    }

    this.dismiss()
  }

}
