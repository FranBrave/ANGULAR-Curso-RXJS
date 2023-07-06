import { of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'http://httpbin.org/delay/1';
//const url = 'https://api.github.com/users?per_page=5';


const manejarError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        of: false,
        usuarios: []
    })
    
}

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url)

obs$.subscribe(data => console.log('getJson', data));
obs2$.subscribe(data => console.log('ajax', data));