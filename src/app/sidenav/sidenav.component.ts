import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatCardModule,MatButtonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  imageList : Array<any> = [];
  filteredList : Array<any> = [];
  ngOnInit() {
    this.getData();
  }

  constructor(public router: Router,
            public httpClient: HttpClient
  ) { }

  getData() {
    let url : string = '/assets/data/products.json';
    this.httpClient.get(url).subscribe((data: any) => {
      console.log(data);
      this.imageList = (data && data.items && data.items.length > 0 ) ? data.items : [];
      this.doFilter();
    });
  }
  doFilter(input: any = null) {
    if(input) {
      this.filteredList = (this.imageList && this.imageList.length > 0) ? this.imageList.filter((x:any) => {
        return (x && x.gender === input) ? true : false;
      }) : []
    } else {
      this.filteredList = this.imageList;
    }
  }

}
