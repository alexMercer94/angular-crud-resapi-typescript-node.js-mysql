import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GameFormComponent } from '../components/game-form/game-form.component';
import { GameListComponent } from '../components/game-list/game-list.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { ImagePipe } from '../pipes/image/image.pipe';
import { GamesService } from '../providers/games.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, GameFormComponent, GameListComponent, ImagePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
