import { Component } from '@angular/core';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss']
})
export class SearchlistComponent {
  username = localStorage.getItem("username");
}
