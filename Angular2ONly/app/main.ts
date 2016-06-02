import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { AppViewComponent } from './app.viewcomponent';
import { AppServiceComponent } from './app.service.component';

import { enableProdMode } from '@angular/core';

enableProdMode();
bootstrap(AppComponent);
bootstrap(AppViewComponent);
bootstrap(AppServiceComponent, [HTTP_PROVIDERS]);
