import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import  * as data from  '../../assets/json/products.json';
import { ok } from 'assert';

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
            return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown 
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/api/getproductlist') && method === 'GET':
                    return getProductList();
                case url.endsWith('/api/getUserKart') && method === 'GET':
                    return getUserKart();
                case url.endsWith('/api/addCart') && method === 'POST':
                    return addCart();
                case url.endsWith('/api/removeCart') && method === 'POST':
                    return removeCart();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions
        function getProductList() {
            console.log('\n--data.Products---',data.Products)
            return of(new HttpResponse({ status: 200, body: ((data.Products) as any).default }));
        }

        function getUserKart() {
            return [];
        }

        function addCart() {
            return [];
        }
        function removeCart() {
            return [];
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};