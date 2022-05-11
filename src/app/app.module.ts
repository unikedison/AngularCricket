import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { ScoreBoardComponent } from './score-board/score-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
