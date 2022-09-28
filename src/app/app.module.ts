import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './views/auth/auth.module';
import { ErrorsModule } from './views/errors/errors.module';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from './layout/layout.module';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ErrorsModule,
    MatIconModule,
    LayoutModule,
    AuthModule,
  ],
  providers: [DatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
