import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'http://httpbinccc.org/delay/1';
//const url = 'https://api.github.com/users?per_page=5';


const manejarError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        of: false,
        usuarios: []
    })
    
}

/* const obs$ = ajax.getJSON(url).pipe(
    catchError(manejarError)
)
const obs2$ = ajax(url).pipe(
    catchError(manejarError)
) */



const obs$ = ajax.getJSON(url)

const obs2$ = ajax(url)

obs$.pipe(
    catchError(manejarError)
)

obs$.subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('error en sub', err),
    complete: () => console.log('complete')
})
