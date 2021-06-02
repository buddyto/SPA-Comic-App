import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) { 
    this.activatedRoute.params.subscribe(parametros=>{
      this.heroe = this._heroesService.getHeroe(parametros.id)
      
    })
   }

  ngOnInit(): void {
  }

}
