import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeriodicElement } from './movies';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movies:MoviesService) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1:PeriodicElement[]=[]
  
  ngOnInit(): void {
    this.movies.fetchDetails().subscribe((success)=>{
      this.dataSource1=success
    })
  }

}
