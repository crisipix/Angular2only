import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpTestService{
    constructor(private _http: Http) { }

    helloWorld() {
        return 'Hello';
    }

    helloWorldPromise() {
        let hello = 'Hello Promise';
        return Promise.resolve(hello);
    }

    getData() {
        return this._http.get('http://jsonplaceholder.typicode.com/posts/1')
                        .toPromise()
                        .then(response => response.json().title).
                        catch(this.handleError);
    }

    postData()
    {
        let post = { userId : 1, title : 'story book the final chapter', body : 'worlds best story'};
        return this._http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify(post))
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}