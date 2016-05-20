import { Component } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES} from '@angular/common';
import {
    Ng2BootstrapConfig, Ng2BootstrapTheme, PROGRESSBAR_DIRECTIVES
} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-app',
    directives: [AlertComponent, PROGRESSBAR_DIRECTIVES, CORE_DIRECTIVES],
    template: '<h1>My First Angular 2 App</h1><alert type="warning">ng2-bootstrap hello world!</alert> <progressbar value="55"></progressbar>'
})
export class AppComponent { }