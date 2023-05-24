
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudStatusService } from '../../services/StatusService/crud-status.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit  {

  statusForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudStatusService
  ) { 
    this.statusForm = this.formBuilder.group({
      createdByName: localStorage.getItem("username"),
      createdOn: new Date(),
      comment: ['']
    })
  }
  username = localStorage.getItem("username");
  ngOnInit() { }
 
  onSubmit(): any {
    this.crudService.PostStatus(this.statusForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/home'))
      }, (err) => {
        console.log(err);
    });
  }
 
}
