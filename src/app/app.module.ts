// Modules
import {NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

// App Components
import {AppComponent} from './components/app.component';
import {LoginComponent} from './components/login.component';


// Errors
import {NotFound404Component} from './components/errors/not-found-404.component';


// Routes
import {routes} from './app.routes';

// Services
import {WindowService} from './services/window.service';
import {RequestsService} from './services/requests.service';

//Constants / Configuration
import {AppConfig} from './configuration/app.config';

// ========================================================================== //

@NgModule({
    providers: [
        // Services
        WindowService,
        RequestsService,
        AppConfig,
    ],
    imports: [
        // Modules
        BrowserModule,
        FormsModule,
        HttpModule,
        routes,
    ],
    declarations: [
        // Third Party Components

        // App Components
        AppComponent,
        LoginComponent,

        // Errors
        NotFound404Component,
    ],
    bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
    ngOnInit() {
    }
}
