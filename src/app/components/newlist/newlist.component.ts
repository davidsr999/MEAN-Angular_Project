import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.css']
})
export class NewlistComponent implements OnInit {
  value = 'Clear me';
  listnamecontrol = new FormControl;
  constructor(private tasksvc: TaskService, private router: Router) {
   }

  ngOnInit(): void {
  }

  createList(title: string) {
    this.tasksvc.post(title).subscribe((res) => {console.log(res); this.goBack(); });
    // console.log(title)

  }

  goBack() {
    this.router.navigate(['/']);
  }

  

}
