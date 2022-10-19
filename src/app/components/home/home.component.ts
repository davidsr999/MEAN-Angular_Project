import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/items.service';


export interface ItemsI {
  name: String,
  descripcion: String,
  edad: Number,
  _id?: String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaItems: ItemsI[] = [];

  constructor(private itemsvc: ItemService) { }

  ngOnInit(): void {
    this.obtenerItems();
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




