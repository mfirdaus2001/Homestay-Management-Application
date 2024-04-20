import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class Todo1Service {

  private storage1: Storage | null = null;

  constructor(private storageService: Storage) { 
    this.init();
  }

  addReserve(key1, value1){
    this.storageService.set(key1,value1)

  }

  deleteReserve(key1){
    this.storageService.remove(key1)

  }

  updateReserve(key1, newValue1){
    this.storageService.set(key1, newValue1)
    this.getAllReserve()

  }

  getAllReserve(){
    let reserve: any = []
    this.storageService.forEach((key1, value1) => {
      reserve.push({'key':value1, 'value':key1})      
    });
    return reserve
  }

  private async init(){
    this.storage1 = await this.storageService.create()
  }
}
