import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-updatereserve',
  templateUrl: './updatereserve.page.html',
  styleUrls: ['./updatereserve.page.scss'],
})
export class UpdatereservePage implements OnInit {

  @Input() reserve;
   //categories = ['work', 'personal', 'home']

   categories =[]
   categorySelectedCategory
 
   newReserveObj = {}
   reserveName
   reserveInDate
   reserveOutDate
   reserveRoom
   reserveCategory
 

  constructor(public modalCtrl1:ModalController, public todo1Service: TodoService) { }

  ngOnInit() {
    this.categories.push('On')
    this.categories.push('Off')

    this.reserveName = this.reserve.value.reserveName
    this.reserveInDate = this.reserve.value.reserveInDate
    this.reserveOutDate = this.reserve.value.reserveOutDate
    this.reserveRoom = this.reserve.value.reserveRoom
    this.reserveCategory = this.reserve.value.reserveCategory
  }

  selectedCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismiss(){
    await this.modalCtrl1.dismiss()
  }

  async updateReserve(){
    this.newReserveObj = ({itemReserveName:this.reserveName,
      itemReserveInDate:this.reserveInDate,
      itemReserveOutDate:this.reserveOutDate,
      itemReserveRoom:this.reserveRoom,
      itemReserveCategory:this.categorySelectedCategory
    })

    let uid1 = this.reserve.key
    await this.todo1Service.updateTask(uid1, this.newReserveObj)
    this.dismiss()
  }

}
