import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EApi } from 'src/enums/api.enum';
import { IGame } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  /**
   * Get  all games from database consulting web service
   */
  getGames(): Observable<any> {
    return this.http.get(`${this.API_URI}${EApi.gamesServices}`);
  }

  /**
   * Get just a game from database consulting web service
   * @param id Game's ID
   */
  getGame(id: string): Observable<any> {
    return this.http.get(`${this.API_URI}${EApi.gamesServices}/${id}`);
  }

  /**
   * Create a game in database consulting web service
   * @param game Game to save in database
   */
  saveGame(game: IGame): Observable<any> {
    return this.http.post(`${this.API_URI}${EApi.gamesServices}`, game);
  }

  /**
   * Delete a game in datanse consulting web service
   * @param id Game's ID to delete in database
   */
  deleteGame(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}${EApi.gamesServices}/${id}`);
  }

  /**
   * Update a game in database consulting web service
   * @param id Game's ID
   * @param updatedGame Game to update in database
   */
  updateGame(id: string | number, updatedGame: IGame): Observable<IGame> {
    return this.http.put(`${this.API_URI}${EApi.gamesServices}/${id}`, updatedGame);
  }
}
