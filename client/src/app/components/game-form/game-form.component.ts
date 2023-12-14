import { Component, OnInit,HostBinding } from '@angular/core';
import { Game } from '../../models/Game';
import {GamesService} from '../../services/games.service';
import {ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.css'
})
export class GameFormComponent implements OnInit {

@HostBinding('class') classes='row';

  game: Game = {
    id:0,
    title : '',
    description : '',
    image : '',
    created_at : new Date(),
  };
  edit: boolean = false;

  constructor(private gameService:GamesService, private router:Router, private activatedRoute:ActivatedRoute){
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.gameService.getGame(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
    
  }
  
  saveNewGame(){
    this.gameService.saveGame(this.game)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/games']);
        },
        err=>console.error(err)
      )
  }

  updateGame() {
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id!, this.game)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      )
  }

  

}
