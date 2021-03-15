import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test } from './test.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { MyPipe } from './MyPipe.pipe';
import { FormsModule } from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';


@NgModule({
  declarations: [
    AppComponent,
    Test,
    AuthorsComponent,
    FavouriteComponent,
    Assignment3Component,
    MyPipe,
    LikeComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
