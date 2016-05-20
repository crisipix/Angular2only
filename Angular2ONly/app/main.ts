import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { AppViewComponent } from './app.viewcomponent';

import { enableProdMode } from '@angular/core';

enableProdMode();
bootstrap(AppComponent);
bootstrap(AppViewComponent);