import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private storage: Storage | null = null;

  constructor(private storageService: Storage) {
    this.init();
   }

  addTask(key, value){
    this.storageService.set(key,value)

  }


  deleteTask(key){
    this.storageService.remove(key)

  }

  
  updateTask(key, newValue){
    this.storageService.set(key, newValue)
    this.getAllTask()
  }


  getAllTask(){
    let tasks: any = []
    this.storageService.forEach((key, value) => {
      tasks.push({'key':value, 'value':key})      
    });
    return tasks
  }


  private async init(){
    this.storage = await this.storageService.create()
  }

}
