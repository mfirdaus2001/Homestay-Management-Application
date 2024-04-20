import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Todo1Service } from '../todo1.service';

@Component({
  selector: 'app-addnewreserve',
  templateUrl: './addnewreserve.page.html',
  styleUrls: ['./addnewreserve.page.scss'],
})
export class AddnewreservePage implements OnInit {

  //categories = ['work', 'personal', 'home']
  categories =[]
  categorySelectedCategory

  newReserveObj = {}
  reserveName
  reserveInDate
  reserveOutDate
  reserveRoom
  reserveCategory

  //taskObject

  constructor(public modalCtrl1:ModalController, public todo1Service: Todo1Service) { }

  ngOnInit() {
    this.categories.push('On')
    this.categories.push('Off')
  }

  async dismiss(){
    
    await this.modalCtrl1.dismiss(this.newReserveObj)
  }

  selectedCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async AddReserve(){
    
    this.newReserveObj = ({itemReserveName:this.reserveName,
                        itemReserveInDate:this.reserveInDate,
                        itemReserveOutDate:this.reserveOutDate,
                        itemReserveRoom:this.reserveRoom,
                      })
    console.log(this.newReserveObj);
    let uid1 = this.reserveName + this.reserveInDate

    if(uid1){
    await this.todo1Service.addReserve(uid1, this.newReserveObj)
    }else{
      console.log("can't save empty task");
    }

    this.dismiss()
  }

}
