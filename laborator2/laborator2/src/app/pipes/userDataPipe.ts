import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User } from 'app/components/data/user';

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')!) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                // case url.endsWith('/users/register') && method === 'POST':
                //     return register();
                case url.endsWith('/login') && method === 'POST':
                    return authenticate();
                case url.match('http://localhost:3000/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        // function register() {
        //     const user = body

        //     if (users.find(x => x.username === user.username)) {
        //         return error('Username "' + user.username + '" is already taken')
        //     }

        //     user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
        //     users.push(user);
        //     localStorage.setItem('users', JSON.stringify(users));

        //     return ok();
        // }

        function authenticate() {
            const { username, password } = body;
            const arrayo=new BehaviorSubject<User[]>(users);
            const user = arrayo.value.find((x: { username: any; password: any; }) => x.username === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
     
                username: user.username,
                password: user.password,
                token: 'fake-jwt-token'
            })
        }

        function getUsers() {
            
            return ok(users);
        }

        function getUserById() {
            if (!isLoggedIn()) return unauthorized();

            const user = users.find((x: { id: number; }) => x.id == idFromUrl());
            return ok(user);
        }

        function deleteUser() {
            if (!isLoggedIn()) return unauthorized();

            users = users.filter((x: { id: number; }) => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        // helper functions


        function ok(body?: { username: string; password: string; token: string; }) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message: string) {
            return throwError({ error: { message } });
        }
        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }



        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};