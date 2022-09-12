import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FeatureOneComponent } from './components/feature-one/feature-one.component';
import { FeatureTwoComponent } from './components/feature-two/feature-two.component';
import { FeatureThreeComponent } from './components/feature-three/feature-three.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectorComponent } from './components/selector/selector.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingsComponent } from './components/ratings/ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FeatureOneComponent,
    FeatureTwoComponent,
    FeatureThreeComponent,
    FaqComponent,
    FooterComponent,
    SelectorComponent,
    RegisterComponent,
    NavComponent,
    FavoriteComponent,
    HomeComponent,
    GalleryComponent,
    CommentsComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
