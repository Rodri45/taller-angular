import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];

  seasonsAvg: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateSeasonsAvg();
    });
  }

  calculateSeasonsAvg(): void {
    let sum: number = 0;
    for (let serie of this.series) {
      sum += serie.seasons;
      console.log(serie.seasons);
    }
    this.seasonsAvg = sum / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}