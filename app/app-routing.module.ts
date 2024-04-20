import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'task-list',
    loadChildren: () => import('./task-list/task-list.module').then( m => m.TaskListPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'add-new-task',
    loadChildren: () => import('./add-new-task/add-new-task.module').then( m => m.AddNewTaskPageModule)
  },
  {
    path: 'updatetask',
    loadChildren: () => import('./updatetask/updatetask.module').then( m => m.UpdatetaskPageModule)
  },
  {
    path: 'addnewreserve',
    loadChildren: () => import('./addnewreserve/addnewreserve.module').then( m => m.AddnewreservePageModule)
  },
  {
    path: 'updatereserve',
    loadChildren: () => import('./updatereserve/updatereserve.module').then( m => m.UpdatereservePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
