import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/providers/games.service';
import { IGame } from '../../interfaces/game.interface';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  edit = false;

  game: IGame = {
    id: 0,
    title: '',
    description: '',
    created_at: new Date()
  };
  constructor(private gameService: GamesService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id).subscribe(
        (res: IGame) => {
          console.log(res);
          this.game = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  /**
   * Create a game consulting service
   */
  saveNewGame(): void {
    delete this.game.id;
    delete this.game.created_at;

    this.gameService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate([`/games`]);
      },
      err => console.error(err)
    );
  }

  /**
   * Update a game consulting service
   */
  updateGame(): void {
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id, this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate([`/games`]);
      },
      err => console.error(err)
    );
  }
}
