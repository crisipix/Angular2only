import { Component } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES} from '@angular/common';
import {HttpTestService} from './app.service';


@Component({
    selector: 'http-test',
    directives: [AlertComponent, CORE_DIRECTIVES],
    template: `
                <h1>Service Caller</h1>
                <alert type="warning">ng2-bootstrap hello world!</alert> 
                <button (click)="getHello()">Get Hello</button>
                <p>{{helloData}}</p>
                <button (click)="getHelloPromise()">Get Hello Promise</button>
                <p>{{helloData}}</p>
                <button (click)="getHttptData()">Get Http Data</button>
                <p>{{getData}}</p>
                <button (click)="postHttpData()">Post Http Data</button>
                <p>new id : {{postData}}</p>
                `,
    providers: [HttpTestService]
})

export class AppServiceComponent {
    constructor(private _httpService: HttpTestService) { }

    helloData: string;
    getData: string;
    postData: string;

    getHello() {
        this.helloData = this._httpService.helloWorld();
    }

    getHelloPromise()
    {
        this._httpService.helloWorldPromise().then(response => this.helloData = response);
    }

    getHttptData() {
        this._httpService.getData().then(response => this.getData = response);

    }

    postHttpData()
    {
        this._httpService.postData().then(response => this.postData = response.id);
    }
}