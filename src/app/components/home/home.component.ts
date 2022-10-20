import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemService } from 'src/app/services/items.service';
import { TaskService } from 'src/app/services/task.service';


export interface ItemsI {
  name: String,
  descripcion: String,
  edad: Number,
  _id?: String
}

export interface ListaI {
  title: string,
  _id: string
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists: any;
  tasks: any;
  listS!: ListaI[];
  listaItems: any;

  constructor(private itemsvc: ItemService, private tasksvc: TaskService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // this.obtenerItems();
    this.getLists();
    this.route.params.subscribe((params) => {
    if(params){
      console.log(params); console.log('""""""""');
      this.getTasks(params);
    } else{
      console.log('no hay id puesto')
    }
    
    
    });
  }

  getLists() {
    return this.tasksvc.getList().subscribe(res => {this.lists = res; this.listS = this.lists; console.log(this.listS)} );
  }

  getTasks(params: any) {
    return this.tasksvc.getTasks(params.listId).subscribe(tasks => this.tasks = tasks);
  }



  obtenerItems() {
    this.itemsvc.get().subscribe(x => {
      this.listaItems = x;
    }, error => {
      console.log(error);
    });
  };


  eliminar(id: any) {
    this.itemsvc.delete(id).subscribe(x =>  {console.log('Producto eliminado'); this.obtenerItems();});
    
    console.log(id);
  };

  nuevoItem() {
    let item: ItemsI = {name: "Maria", descripcion: "hola muuuundo", edad: 30};
    this.itemsvc.post(item).subscribe(x => {this.obtenerItems();});
  }




}




