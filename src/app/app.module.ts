import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      toFixed: 0,
      radius: 80,
      maxPercent: 100,
      outerStrokeColor: '#0bceaf',
      unitsFontWeight: '600',
      unitsColor: '#ffffff',
      titleColor: '#ffffff',
      titleFontWeight: '600',
      subtitleColor: '#ffffff',
      subtitleFontWeight: '600',
      showBackground: false,
      showInnerStroke: false,
      animation: false,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
