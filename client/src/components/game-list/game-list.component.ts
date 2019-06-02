import { Component, HostBinding, OnInit } from '@angular/core';
import { IGame } from '../../interfaces/game.interface';
import { GamesService } from '../../providers/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  games: IGame[] = [];
  constructor(private gameService: GamesService) {}

  ngOnInit() {
    this.getGames();
  }

  /**
   * Delete a game
   * @param id Game's ID
   */
  deleteGame(id: string): void {
    this.gameService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.error(err)
    );
  }

  /**
   * Get games from web service
   */
  getGames(): void {
    this.gameService.getGames().subscribe(
      (res: IGame[]) => {
        this.games = res;
      },
      err => console.error(err)
    );
  }
}
